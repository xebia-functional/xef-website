---
id: scala
title: Scala
sidebar_position: 2
description: Get xef.ai up and running in Scala
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quickstart - Scala <img src="https://www.scala-lang.org/resources/img/frontpage/scala-spiral.png" style={{ height: "2.5rem" }} alt="Scala logo" />

## Getting the libraries

Just add the library to your SBT build.

```scala
libraryDependencies += "com.xebia" %% "xef-scala" % "<version>"
```

:::info Version compatibility

`xef-scala` is currently only available for Scala 3.

:::

The Scala module depends on project [Loom](https://openjdk.org/projects/loom/), 
so you will need at least Java 19 to use the library. Furthermore, you need to pass
the `--enable-preview` flag.

<Tabs>
  <TabItem value="sbt" label="SBT" default>

```shell
sbt -J--enable-preview <your-command>
```

  </TabItem>
  <TabItem value="intellij" label="IntelliJ">

<ul>
<li>Set the Java version to at least 19.</li>
<li>Set VM options to <code>--enable-preview</code>.</li>
</ul>

  </TabItem>
</Tabs>

By default, the `ai` block connects to [OpenAI](https://platform.openai.com/).
To use their services you should provide the corresponding API key in the `OPENAI_TOKEN`
environment variable, and have enough credits.

<Tabs>
  <TabItem value="sbt" label="SBT" default>

```shell
env OPENAI_TOKEN=<your-token> <sbt-command>
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

After adding the library to your project,
you get access to the `ai` function, which is your gate to the modern AI world.
Inside of it, you can _prompt_ for information, which means posing the question to an LLM
(Large Language Model). The easiest way is to just get the information back as a string.

```scala
import com.xebia.functional.xef.scala.auto.*

@main def runBook: Unit = ai {
  val topic: String = "functional programming"
  promptMessage(s"Give me a selection of books about $topic")
}.getOrElse(ex => println(ex.getMessage))
```

In the example above we _execute_ the `ai` block with `getOrElse`, so in case an exception
is thrown (for example, if your API key is not correct), we are handing the error by printing
the reason of the error.

In the next examples we'll write functions that rely on `ai`'s DSL functionality,
but without actually extracting the values yet using `getOrThrow` or `getOrElse`.
We'll eventually call this functions from an `ai` block as we've shown above, and
this allows us to build larger pipelines, and only extract the final result at the end.

This can be done by either using a context parameters or function _using_ `AIScope`.
Let's compare the two:

```scala
def book(topic: String)(using scope: AIScope): List[String] =
  promptMessage(s"Give me a selection of books about $topic")

def book(topic: String): AIScope ?=> List[String] =
  promptMessage(s"Give me a selection of books about $topic")
```

## Structure

The output from the `books` function above may be hard to parse back from the
strings we obtain. Fortunately, you can also ask xef.ai to give you back the information
using a _custom type_. The library takes care of instructing the LLM on building such
a structure, and deserialize the result back for you.

```scala
import com.xebia.functional.xef.scala.auto.*
import io.circe.Decoder
import io.circe.parser.decode

private final case class Book(name: String, author: String, summary: String) derives ScalaSerialDescriptor, Decoder

def summarizeBook(title: String, author: String)(using scope: AIScope): Book =
  prompt(s"$title by $author summary.")

@main def runBook: Unit =
  ai {
    val toKillAMockingBird = summarizeBook("To Kill a Mockingbird", "Harper Lee")
    println(s"${toKillAMockingBird.name} by ${toKillAMockingBird.author} summary:\n ${toKillAMockingBird.summary}")
  }.getOrElse(ex => println(ex.getMessage))
```

xef.ai for Scala uses `xef-core`, which it's based on Kotlin. Hence, the core 
reuses [Kotlin's common serialization](https://kotlinlang.org/docs/serialization.html), and
Scala uses [circe](https://github.com/circe/circe) to derive the required serializable instance. 
The LLM is usually able to detect which kind of information should
go on each field based on its name (like `title` and `author` above).

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

```scala
import com.xebia.functional.xef.scala.agents.DefaultSearch
import com.xebia.functional.xef.scala.auto.*
import com.xebia.functional.xef.scala.auto.ScalaSerialDescriptorContext.given
import io.circe.Decoder
import io.circe.parser.decode

private def getQuestionAnswer(question: String)(using scope: AIScope): List[String] =
  contextScope(DefaultSearch.search("Weather in Cádiz, Spain")) {
    promptMessage(question)
  }

@main def runWeather: Unit = ai {
  val question = "Knowing this forecast, what clothes do you recommend I should wear if I live in Cádiz?"
  println(getQuestionAnswer(question).mkString("\n"))
}
```

:::note Better vector stores

The underlying mechanism of the context is a _vector store_, a data structure which
saves a set of strings, and is able to find those similar to another given one.
By default xef.ai uses an _in-memory_ vector store, since it provides maximum
compatibility across platforms. However, if you foresee your context growing above
the hundreds of elements, you may consider switching to another alternative, like
Lucene or PostgreSQL.

:::
