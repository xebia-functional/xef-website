---
title: Quickstart
description: Get xef.ai up and running in Kotlin
sidebar_position: 2
sidebar_custom_props:
  icon: icon-quickstart.svg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# <decorated-text icon="icon-quickstart.svg" title="Quickstart" />

## Getting the libraries

Libraries are published in Maven Central. You may need to  add that repository explicitly
in your build, if you haven't done it before. Then add the library in the usual way.

```kotlin
repositories {
    mavenCentral()
}

dependencies {
    implementation("com.xebia:xef-core:<version>")
    implementation("com.xebia:xef-openai:<version>")
}
```

We publish all libraries at once under the same version, so
[version catalogs](https://docs.gradle.org/current/userguide/platforms.html#sec:sharing-catalogs)
could be useful.

By default, the `OpenAI.conversation` block connects to [OpenAI](https://platform.openai.com/).
To use their services you should provide the corresponding API key in the `OPENAI_TOKEN`
environment variable, and have enough credits.

<Tabs>
  <TabItem value="gradle" label="Gradle" default>

```shell
env OPENAI_TOKEN=<your-token> <gradle-command>
```

  </TabItem>
  <TabItem value="intellij" label="IntelliJ">

Set the environment variable `OPENAI_TOKEN=xxx` in the properties.

  </TabItem>
</Tabs>

:::caution

This library may transmit source code and potentially user input data to third-party services as part of its functionality.
Developers integrating this library into their applications should be aware of this behavior and take necessary precautions to ensure that sensitive data is not inadvertently transmitted.
Read our [_Data Transmission Disclosure_](https://github.com/xebia-functional/xef#%EF%B8%8F-data-transmission-disclosure) for further information.

:::

## Your first prompt

After adding the library to your project you get access to the `conversation` function, which is your port of entry to the modern AI world.
Inside of it, you can _prompt_ for information, which means posing the question to an LLM
(Large Language Model). The easiest way is to just get the information back as a string.


<Tabs>
  <TabItem value="code" label="Code" default>

```kotlin
import com.xebia.functional.xef.conversation.llm.openai.OpenAI
import com.xebia.functional.xef.conversation.llm.openai.promptMessage

suspend fun main() {
  println(books("Artificial Intelligence"))
}

suspend fun books(topic: String): String = OpenAI.conversation {
  promptMessage("Give me a selection of books about $topic")
}
```
  </TabItem>

  <TabItem value="output" label="Output">

```text
Here are some books about Artificial Intelligence:

1. "Superintelligence: Paths, Dangers, Strategies" by Nick Bostrom
2. "Artificial Intelligence: A Modern Approach" by Stuart Russell and Peter Norvig
3. "Life 3.0: Being Human in the Age of Artificial Intelligence" by Max Tegmark
4. "The Master Algorithm: How the Quest for the Ultimate Learning Machine Will Remake Our World" by Pedro Domingos
5. "Human Compatible: Artificial Intelligence and the Problem of Control" by Stuart Russell
6. "AI Superpowers: China, Silicon Valley, and the New World Order" by Kai-Fu Lee
7. "The Singularity Is Near: When Humans Transcend Biology" by Ray Kurzweil
8. "Deep Learning" by Ian Goodfellow, Yoshua Bengio, and Aaron Courville
9. "Artificial Intelligence: Foundations of Computational Agents" by David L. Poole and Alan K. Mackworth
10. "Machines of Loving Grace: The Quest for Common Ground Between Humans and Robots" by John Markoff

These books cover a wide range of topics related to Artificial Intelligence, including its history, potential risks, ethical considerations, and its impact on society.
```

  </TabItem>
</Tabs>

The `books` function above uses the `conversation` function to connect to OpenAI,
and then uses the `promptMessage` function to ask for a selection of books about a given topic.
The result is a string with the answer from the LLM.<br />

## Structure

The output from the `books` function above may be hard to parse back from the
strings we obtain. Fortunately, you can also ask xef.ai to give you back the information
using a _custom type_.

The library takes care of instructing the LLM on building such
a structure, and deserialize the result back for you.

<Tabs>
<TabItem value="code" label="Code" default>

```kotlin
import com.xebia.functional.xef.conversation.llm.openai.OpenAI
import com.xebia.functional.xef.conversation.llm.openai.prompt
import kotlinx.serialization.Serializable

suspend fun main() {
  val result = books("Heavy Metal")
  result.books.forEach { println("""
    Title: ${it.title}
    Author: ${it.author}
  """.trimIndent()) }
}

@Serializable
data class Books(val books: List<Book>)

@Serializable
data class Book(val title: String, val author: String)

suspend fun books(topic: String): Books = OpenAI.conversation {
  prompt("Give me a selection of books about $topic")
}
```
</TabItem>
  
<TabItem value="output" label="Output">

```text
Title: Lords of Chaos: The Bloody Rise of the Satanic Metal Underground
Author: Michael Moynihan

Title: Choosing Death: The Improbable History of Death Metal and Grindcore
Author: Albert Mudrian

Title: Sound of the Beast: The Complete Headbanging History of Heavy Metal
Author: Ian Christe

Title: Black Metal: Evolution of the Cult
Author: Dayal Patterson

Title: Metallica: Enter Night
Author: Mick Wall
```
</TabItem>
</Tabs>

xef.ai reuses [Kotlin's common serialization](https://kotlinlang.org/docs/serialization.html),
which requires adding the `kotlinx.serialization` plug-in to your build, and mark each
class as `@Serializable`. The LLM is usually able to detect which kind of information should
go on each field based on its name (like `title` and `author` above). For those cases where the LLM is not able to infer the type, you can use the `@Description` annotation:

## @Description annotations

<Tabs>
<TabItem value="code" label="Code" default>

```kotlin
import com.xebia.functional.xef.conversation.Description
import com.xebia.functional.xef.conversation.llm.openai.OpenAI
import com.xebia.functional.xef.conversation.llm.openai.prompt
import kotlinx.serialization.Serializable

suspend fun main() {
  val result = books("Artificial Intelligence")
  result.books.forEach { println("""
    Title: ${it.title}
    Author: ${it.author}
    Summary: ${it.summary}
  """.trimIndent()) }
}

@Serializable
@Description("A list of books")
data class Books(
  @Description("The list of books")
  val books: List<Book>
)

@Serializable
@Description("A book")
data class Book(
  @Description("The title of the book")
  val title: String,
  @Description("The author of the book")
  val author: String,
  @Description("A 20 word summary of the book")
  val summary: String
)

suspend fun books(topic: String): Books = OpenAI.conversation {
  prompt("Give me a selection of books about $topic")
}
```
</TabItem>

<TabItem value="output" label="Output">

```text
Title: Artificial Intelligence: A Modern Approach
Author: Stuart Russell, Peter Norvig
Summary: This book provides a comprehensive introduction to the field of artificial intelligence, covering topics such as problem-solving, knowledge representation, and machine learning.

Title: Superintelligence: Paths, Dangers, Strategies
Author: Nick Bostrom
Summary: In this thought-provoking book, Nick Bostrom explores the potential risks and benefits of developing superintelligent machines and discusses strategies for ensuring a positive outcome.

Title: Machine Learning: A Probabilistic Perspective
Author: Kevin P. Murphy
Summary: This book offers a comprehensive introduction to machine learning, with a focus on probabilistic models and their applications in various domains.

Title: Deep Learning
Author: Ian Goodfellow, Yoshua Bengio, Aaron Courville
Summary: Deep Learning provides a comprehensive introduction to deep learning methods and architectures, covering topics such as neural networks, convolutional networks, and recurrent networks.

Title: The Master Algorithm: How the Quest for the Ultimate Learning Machine Will Remake Our World
Author: Pedro Domingos
Summary: In this book, Pedro Domingos explores the five tribes of machine learning and argues that the ultimate learning algorithm should combine the strengths of all these approaches.
```
</TabItem>
</Tabs>

All the types and properties annotated with `@Description` will be used to build the
json schema `description` fields used for the LLM to reply with the right format and data
in order to deserialize the result back. 


## Prompts

The function `books` uses naive string interpolation to make the topic part of the question
to the LLM. As the prompt gets bigger, though, you may want to break it into smaller parts.
We use the [builder pattern](https://kotlinlang.org/docs/type-safe-builders.html) to include messages and 
other prompts which get built before the chat completions endpoint.

<Tabs>

<TabItem value="code" label="Code" default>

```kotlin
import com.xebia.functional.xef.conversation.Conversation
import com.xebia.functional.xef.conversation.llm.openai.OpenAI
import com.xebia.functional.xef.conversation.llm.openai.prompt
import com.xebia.functional.xef.prompt.Prompt
import com.xebia.functional.xef.prompt.templates.system
import com.xebia.functional.xef.prompt.templates.assistant
import com.xebia.functional.xef.prompt.templates.user
import kotlinx.serialization.Serializable

suspend fun main() {
  val result = OpenAI.conversation {
    books("Cooking")
  }

  result.books.forEach { println("""
    Title: ${it.title}
    Author: ${it.author}
  """.trimIndent()) }
}

@Serializable
data class Books(val books: List<Book>)

@Serializable
data class Book(val title: String, val author: String)

suspend fun Conversation.books(topic: String): Books {
  val myCustomPrompt = Prompt {
    +system("You are an assistant in charge of providing a selection of books about topics provided")
    +assistant("I will provide relevant suggestions of books and follow the instructions closely.")
    +user("Give me a selection of books about $topic")
  }

  return prompt(myCustomPrompt)
}
```
</TabItem>

<TabItem value="output" label="Output">

```text
Title: Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking
Author: Samin Nosrat

Title: The Joy of Cooking
Author: Irma S. Rombauer

Title: The Food Lab: Better Home Cooking Through Science
Author: J. Kenji López-Alt

Title: Cooking for Geeks: Real Science, Great Hacks, and Good Food
Author: Jeff Potter

Title: The Flavor Bible: The Essential Guide to Culinary Creativity, Based on the Wisdom of America's Most Imaginative Chefs
Author: Karen Page and Andrew Dornenburg
```

</TabItem>
</Tabs>

This style of prompting is more effective than simple strings messages as it describes a scene of how the LLM
should behave and reply. We use different roles for each message constructed with the `Prompt` builder.

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
and make its response part of the context. One such agent is `Search`, which uses a web
search service to enrich that context.

<Tabs>
<TabItem value="code" label="Code" default>

```kotlin
import com.xebia.functional.xef.conversation.llm.openai.OpenAI
import com.xebia.functional.xef.conversation.llm.openai.promptMessage
import com.xebia.functional.xef.prompt.Prompt
import com.xebia.functional.xef.reasoning.serpapi.Search

suspend fun main() {
  val question = Prompt("Knowing this forecast, what clothes do you recommend I should wear?")

  OpenAI.conversation {
    val search = Search(OpenAI.fromEnvironment().DEFAULT_CHAT, this)
    addContext(search("Weather in Cádiz, Spain"))
    val answer = promptMessage(question)
    println(answer)
  }
}
```
</TabItem>
</Tabs>    

To execute the code you need to add the `xef-reasoning` library to your project,
and provide the `SERPAPI_TOKEN` environment variable with a valid token from [SerpApi](https://serpapi.com/).

```kotlin
dependencies {
  implementation("com.xebia:xef-reasoning:<version>")
}
```

```shell
env SERP_API_KEY=<your-api-key>
```

:::note Better vector stores

The underlying mechanism of the context is a _vector store_, a data structure which
saves a set of strings, and is able to find those similar to another given one.
By default xef.ai uses an _in-memory_ vector store, since it provides maximum
compatibility across platforms. However, if you foresee your context growing above
the hundreds of elements, you may consider switching to another alternative, like
Lucene or PostgreSQL also supported by xef.
