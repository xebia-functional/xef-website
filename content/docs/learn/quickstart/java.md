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
    <version>0.2.0</version>
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
  implementation("com.xebia:xef-core:<version>")
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
you get access to the `AIScope` class, which is your port of entry to the modern AI world.
Inside of it, you can _prompt_ for information, which means posing the question to an LLM
(Large Language Model). The easiest way is to just get the information back as a string.

```java
package my.example;

import com.xebia.functional.xef.java.auto.AIScope;

import java.util.concurrent.ExecutionException;

public class Example {
  public static void main(String[] args) throws ExecutionException, InterruptedException {
    try (AIScope scope = new AIScope()) {
      String topic = "artificial intelligence";
      scope.promptMessage("Give me a selection of books about " + topic)
              .thenAccept(System.out::println)
              .get();
    }
  }
}
```

In the example above we create an `AIScope` using the `try-with-resources` syntax,
which ensures that the scope is closed at the end of the block.
The `AIScope` gives us access to the `promptMessage` & co functions, which allow us to interact with the LLM.

All the functions of `AIScope` are returned as a `Future` for maximum backward compatibility until JDK8,
but you can inject `Executors.newVirtualThreadPerTaskExecutor()` to have the `Future`s work on virtual threads.

Remember that exceptions in `Future`are wrapped in `ExecutionException`,
so to inspect the actual exception you need to call `getCause()` on it.
_Structured Concurrency_ is implemented under the hood by Kotlin's `CoroutineScope`,
and all futures are cancelled when the `AIScope` is closed and `Future#get` will throw `CancellationException`.

In the next examples we'll write functions that rely on `AIScope`'s DSL functionality

## Structure

The output from the `books` function above may be hard to parse back from the
strings we obtain. Fortunately, you can also ask xef.ai to give you back the information
using a _custom type_. The library takes care of instructing the LLM on building such
a structure, and deserialize the result back for you.

We can thus define a `Book` class that describes the desired response we want to receive from the LLM.
Relying on [Jakarta validation](https://beanvalidation.org) we can also specify which fields are mandatory using `NotNull`,
or include additional constraints in the [Json Schema](https://json-schema.org).

xef.ai reuses [Jackson](https://github.com/FasterXML/jackson-databind),
and [JsonSchema generator](https://github.com/victools/jsonschema-generator) to parse and generate the Json Schema V7 for you.

```java
package my.example;

import jakarta.validation.constraints.NotNull;

public class Book {
  @NotNull public String title;
  @NotNull public String author;
  @NotNull public int year;
  @NotNull public String genre;

  @Override
  public String toString() {
    return "Book{" +
            "title='" + title + '\'' +
            ", author='" + author + '\'' +
            ", year=" + year +
            ", genre='" + genre + '\'' +
            '}';
  }
}
```

Using the definition of `Book`, we can rewrite our previous example as:

```java
package my.example;

import com.xebia.functional.xef.java.auto.AIScope;
import jakarta.validation.constraints.NotNull;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class Example {

    private final AIScope scope;

    public Example(AIScope scope) {
        this.scope = scope;
    }
    
    public CompletableFuture<Book> bookSelection(String topic) {
        return scope.prompt("Give me a selection of books about " + topic, Example.Book.class);
    }

    public static void main(String[] args) throws ExecutionException, InterruptedException {
        try (AIScope scope = new AIScope()) {
            Example example = new Example(scope);
            example.bookSelection("artificial intelligence")
                    .thenAccept(System.out::println)
                    .get();
        }
    }
}
```

Here we also show how you can easily capture the `AIScope` in a class,
and build and compose additional functionality on top.
If you're using any dependency injection framework, you can also construct `AIScope` and inject it as usual.
Make sure that the dependency injection framework properly closes the `AIScope` when the application shuts down.

In a larger AI application it's common to end up with quite some template for prompts.
Online material like [this course](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)
and [this tutorial](https://learnprompting.org/docs/intro) explain some of the most important patterns,
some of them readily available in xef.ai.
