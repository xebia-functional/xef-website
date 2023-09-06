---
id: java
title: Java
sidebar_position: 3
description: Get xef.ai up and running in Java
sidebar_custom_props:
  icon: java-icon.svg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# <decorated-text icon="java-icon.svg" title="Quickstart - Java" />

## Getting the libraries

Libraries are published in Maven Central. You may need to  add that repository explicitly
in your build, if you haven't done it before. Then add the library in the usual way.

<Tabs>
  <TabItem value="maven" label="Maven" default>

```xml
<dependency>
    <groupId>com.xebia</groupId>
    <artifactId>xef-java</artifactId>
    <version>0.0.2</version>
    <type>pom</type>
</dependency>
```

  </TabItem>
  <TabItem value="gradle" label="Gradle">

```kotlin
repositories {
  mavenCentral()
}

dependencies {
  implementation("com.xebia:xef-java:<version>")
}
```

  </TabItem>
</Tabs>


We publish all libraries at once under the same version, so
[version catalogs](https://docs.gradle.org/current/userguide/platforms.html#sec:sharing-catalogs)
could be useful.

By default, the `AIScope` block connects to [OpenAI](https://platform.openai.com/).
To use their services you should provide the corresponding API key in the `OPENAI_TOKEN`
environment variable, and have enough credits.

<Tabs>
  <TabItem value="intellij" label="IntelliJ" default>

Set the environment variable `OPENAI_TOKEN=xxx` in the properties.

  </TabItem>
  <TabItem value="gradle" label="Gradle">

```shell
env OPENAI_TOKEN=<your-token> <gradle-command>
```

  </TabItem>
</Tabs>

:::caution

This library may transmit source code and potentially user input data to third-party services as part of its functionality.
Developers integrating this library into their applications should be aware of this behavior and take necessary precautions to ensure that sensitive data is not inadvertently transmitted.
Read our [_Data Transmission Disclosure_](https://github.com/xebia-functional/xef#%EF%B8%8F-data-transmission-disclosure) for further information.

:::

## Your first prompt

After adding the library to your project
you get access to the `Conversation` class, which is your port of entry to the modern AI world.
Inside of it, you can _prompt_ for information, which means posing the question to an LLM
(Large Language Model). The easiest way is to just get the information back as a string.

```java
package example;

import com.xebia.functional.xef.conversation.PlatformConversation;
import com.xebia.functional.xef.conversation.llm.openai.OpenAI;
import com.xebia.functional.xef.prompt.Prompt;

import java.util.concurrent.ExecutionException;

public class Books {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        try (var scope = OpenAI.conversation()) {
            var book = scope.promptMessage(
                    OpenAI.FromEnvironment.DEFAULT_SERIALIZATION, 
                    new Prompt("A book about cooking")
            ).get();
            System.out.println(book);
        }
    }
}

```

In the example above we create a `Conversation` using the `try-with-resources` syntax,
which ensures that the scope is closed at the end of the block.
The `Conversation` gives us access to the `promptMessage` & co functions, which allow us to interact with the LLM.

All the functions of `Conversation` are returned as a `Future` for maximum backward compatibility until JDK8,
but you can inject `Executors.newVirtualThreadPerTaskExecutor()` to have the `Future`s work on virtual threads.
We block in these examples assuming LOOM.

Remember that exceptions in `Future` are wrapped in `ExecutionException`,
so to inspect the actual exception you need to call `getCause()` on it.
_Structured Concurrency_ is implemented under the hood by Kotlin's `CoroutineScope`,
and all futures are cancelled when the `Conversation` is closed and `Future#get` will throw `CancellationException`.

In the next examples we'll write functions that rely on `Conversation`'s DSL functionality

## Structure

The output of functions like the `books` function above may be hard to parse back from the
strings we obtain. Fortunately, you can also ask xef.ai to give you back the information
using a _custom type_. The library takes care of instructing the LLM on building such
a structure, and deserialize the result back for you.

In the following example we define a new domain around a `MealPlan` class that describes the desired response we want to receive from the LLM.
Relying on [Jakarta validation](https://beanvalidation.org) we can also specify which fields are mandatory using `NotNull`,
or include additional constraints in the [Json Schema](https://json-schema.org).

xef.ai reuses [Jackson](https://github.com/FasterXML/jackson-databind),
and [JsonSchema generator](https://github.com/victools/jsonschema-generator) to parse and generate the Json Schema for you.

```java
package example;

import com.xebia.functional.xef.conversation.PlatformConversation;
import com.xebia.functional.xef.conversation.llm.openai.OpenAI;
import com.xebia.functional.xef.prompt.Prompt;
import com.xebia.functional.xef.reasoning.serpapi.Search;
import jakarta.validation.constraints.NotNull;

import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class MealPlan {

    public record MealPlanRecord(@NotNull String name, @NotNull List<Recipe> recipes){}
    public record Recipe(@NotNull String name, @NotNull List<String> ingredients){}

    private static MealPlanRecord mealPlan(PlatformConversation scope) {
        return scope.prompt(
            OpenAI.FromEnvironment.DEFAULT_SERIALIZATION, 
            new Prompt("Meal plan for the week for a person with gall bladder stones that includes 5 recipes."), 
            MealPlanRecord.class
        );
    }

    public static void main(String[] args) throws ExecutionException, InterruptedException {
        try (var scope = OpenAI.conversation()) {
            System.out.println(mealPlan(scope));
        }
    }
}
```

In a larger AI application it's common to end up with quite some template for prompts.
Online material like [this course](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)
and [this tutorial](https://learnprompting.org/docs/intro) explain some of the most important patterns,
some of them readily available in xef.ai.


## Context

LLMs have knowledge about a broad variety of topics. But by construction they are not able
to respond to questions about information not available in their training set. However, you
often want to supplement the LLM with more data:
- Transient information referring to the current moment, like the current weather, or
  the trends in the stock market in the past 10 days.
- Non-public information, for example for summarizing a piece of text you're creating
  within you organization.

These additional pieces of information are called the _context_ in xef.ai, and are attached
to every question to the LLM. Although you can add arbitrary strings to the context at any
point, the most common mode of usage is using an _agent_ to consult an external service,
and make its response part of the context. One such agent is `search`, which uses a web
search service to enrich that context.

```java
package example;

import com.xebia.functional.xef.conversation.PlatformConversation;
import com.xebia.functional.xef.conversation.llm.openai.OpenAI;
import com.xebia.functional.xef.prompt.Prompt;
import com.xebia.functional.xef.reasoning.serpapi.Search;

import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class MealPlan {

    public record MealPlanRecord(String name, List<Recipe> recipes){}
    public record Recipe(String name, List<String> ingredients){}

    private static MealPlanRecord mealPlan(PlatformConversation scope) {
        return scope.prompt(
            OpenAI.FromEnvironment.DEFAULT_SERIALIZATION, 
            new Prompt("Meal plan for the week for a person with gall bladder stones that includes 5 recipes."), 
            MealPlanRecord.class
        );
    }

    public static void main(String[] args) throws ExecutionException, InterruptedException {
        try (var scope = OpenAI.conversation()) {
            var search = new Search(OpenAI.FromEnvironment.DEFAULT_CHAT, scope, 3);
            scope.addContextFromArray(search.search("gall bladder stones meals").get());
            System.out.pritnln(mealPlan(scope).get());
        }
    }
}
```

In some cases the LLM needs to be _primed_ with some information before it can answer.
We can use the @Description annotation to provide a description of the information we want to add
to the LLM about the expected response for our objects:

## @Description annotations

```java 
package example;

import com.xebia.functional.xef.conversation.PlatformConversation;
import com.xebia.functional.xef.conversation.llm.openai.OpenAI;
import com.xebia.functional.xef.prompt.Prompt;
import com.xebia.functional.xef.reasoning.serpapi.Search;
import com.xebia.functional.xef.conversation.jvm.Description;

import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;


public class MealPlan {

    @Description("A meal plan")
    public record MealPlanRecord(
        @Description("The name of the meal plan") String name,
        @Description("A list of 5 recipes for the meal plan") List<Recipe> recipes
    ){}
    
    public record Recipe(
        @Description("The name of the recipe") String name,
        @Description("A list of ingredients for the recipe") List<String> ingredients
    ){}

    private static MealPlanRecord mealPlan(PlatformConversation scope) {
        return scope.prompt(OpenAI.FromEnvironment.DEFAULT_SERIALIZATION, new Prompt("Meal plan for the week for a person with gall bladder stones that includes 5 recipes."), MealPlanRecord.class);
    }

    public static void main(String[] args) throws ExecutionException, InterruptedException {
        try (var scope = OpenAI.conversation()) {
            var search = new Search(OpenAI.FromEnvironment.DEFAULT_CHAT, scope, 3);
            scope.addContextFromArray(search.search("gall bladder stones meals").get());
            System.out.pritnln(mealPlan(scope).get());
        }
    }
}
```

:::note Better vector stores

The underlying mechanism of the context is a _vector store_, a data structure which
saves a set of strings, and is able to find those similar to another given one.
By default xef.ai uses an _in-memory_ vector store, since it provides maximum
compatibility across platforms. However, if you foresee your context growing above
the hundreds of elements, you may consider switching to another alternative, like
Lucene or PostgreSQL.
