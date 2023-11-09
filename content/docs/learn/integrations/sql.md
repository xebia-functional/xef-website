---
id: sql
title: SQL
sidebar_position: 1
description: The SQL module facilitates SQL query generation and execution.
sidebar_custom_props:
  icon: icon-sql.svg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# <decorated-text icon="icon-sql.svg" title="Integrations - SQL" />

## Overview

The SQL module facilitates SQL query generation and execution. This documentation will guide you through the installation and usage of this module.

## Getting the libraries

Ensure that you include the SQL module in your project. You can do so by adding the following dependencies to your project's build configuration:

```gradle
repositories {
    mavenCentral()
}

dependencies {
    implementation("com.xebia:xef-kotlin:<version>")
    implementation("com.xebia:xef-sql:<version>")
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

## Supported Databases

The SQL module is built upon the [Exposed](https://github.com/JetBrains/Exposed) library, which means it is compatible with a variety of relational databases. Below is a list of some common databases that are compatible with the SQL Module:

1. MySQL
2. PostgreSQL
3. SQLite
4. Microsoft SQL Server
5. H2 Database
6. Oracle Database
7. MariaDB

Ensure you have the corresponding database driver library added to your project's dependencies.

For example, if you plan to use MySQL, include the MySQL JDBC driver in your project's build configuration
```gradle
dependencies {
    implementation("mysql:mysql-connector-java:<version>")
}
```

## Getting Started
To get started with the SQL module, you must initialize it with your database configuration and the model.

```kotlin
JdbcConfig(
  vendor = "mysql",
  host = "localhost",
  username = "your_username",
  password = "top_secret_password",
  port = 3306,
  database = "my_db",
  model = OpenAI().DEFAULT_SERIALIZATION
)
```
Once the configuration is set, you can generate and execute SQL queries based on user prompts and contextual information using the primary function promptQuery. It returns an AnswerResponse object, which includes query results and a friendly sentence.

```kotlin
val prompt = "How many users are active?"
val tableNames = listOf("users")

OpenAI.conversation {
  SQL.fromJdbcConfig(jdbcConfig) {
    val answer = promptQuery(prompt, tableNames, null)
  }
}
```

## Usage
Let's take a look at a more complete example to understand how it works.

Suppose you have a table named "sales" with the following structure:
```mysql
CREATE TABLE sales (
    id INTEGER PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL,
    amount NUMERIC(10, 2) NOT NULL,
    category VARCHAR(255) NOT NULL,
    created_at DATE NOT NULL,
    customer_name VARCHAR(255) NOT NULL
);
```
The module is able to get the schema from the table without the need to specify it, you just have to tell it the name of the table. 

However, in order to make specific queries efficiently, it will be necessary to provide a more extensive context, such as possible enumerations or values that cannot be inferred from the table schema.
```kotlin
import com.xebia.functional.xef.conversation.llm.openai.OpenAI
import com.xebia.functional.xef.sql.jdbc.JdbcConfig
import com.xebia.functional.xef.sql.SQL

suspend fun main() {
  val mysql = JdbcConfig(
    vendor = "mysql",
    host = "localhost",
    username = "your_username",
    password = "top_secret_password",
    port = 3306,
    database = "my_db",
    model = OpenAI().DEFAULT_SERIALIZATION
  )

  val context = """
        These are the existing values for some fields:
        - The field "amount" represents the total sales amount in USD.
        - The field "product_name" contains the name of the product, and examples include "Smartphone", "Laptop", "Tablet", etc.
        - The field "quantity" is the quantity of products sold, expressed as an integer (e.g., 5, 10, 20).
        - The field "category" categorizes the products, including: "Electronics", "Accessories", "Appliances", "Clothing", "Furniture.
        - The field "created_at" contains the date of the sale in the format "YYYY-MM-DD".
        - The field "customer_name" represents the name of the customer who made the purchase.
    """.trimIndent()

  OpenAI.conversation {
    SQL.fromJdbcConfig(mysql) {
      val answer1 = promptQuery("Show me all the sales made today", listOf("sales"), context)
      val answer2 = promptQuery("How much money has been earned in sales this month?", listOf("sales"), context)
    }
  }
}
```
Once the context has been added, if we execute the prompts we should get a response with the following structure:

```kotlin
answer1 = AnswerResponse(
    input = "Show me all the sales made today",
    answer = "Here are the sales made today:",
    mainQuery = "SELECT * FROM sales WHERE created_at = CURDATE()",
    detailedQuery = null,
    mainTable = QueryResult(
        columns = listOf(
          Column(name=id, type=INT),
          Column(name=product_name, type=VARCHAR),
          Column(name=quantity, type=INT),
          Column(name=amount, type=DECIMAL),
          Column(name=category, type=VARCHAR),
          Column(name=created_at, type=DATE),
          Column(name=customer_name, type=VARCHAR)
        ),
        rows = listOf(
            listOf("1", "Smartphone", "5", "150.00", "Electronics", "2023-11-03", "John Doe"),
            listOf("2", "Laptop", "3", "75.00", "Electronics", "2023-11-03", "Jane Smith"),
            listOf("3", "Tablet", "2", "30.00", "Electronics", "2023-11-03", "Bob Johnson")
        )
    ),
    detailedTable = null
)
```

```kotlin
answer2 = AnswerResponse(
    input = "How much money has been earned in sales this month?",
    answer = "The total earnings for this month are 255.00$",
    mainQuery = "SELECT SUM(amount) AS total_earned FROM sales WHERE MONTH(created_at) = MONTH(CURDATE())",
    detailedQuery = null,
    mainTable = QueryResult(
        columns = listOf(
            Column("total_earnings", "DECIMAL")
        ),
        rows = listOf(
            listOf("255.00")
        )
    ),
    detailedTable = null
)
```

If you want to see a more complete example you can go [here](https://github.com/xebia-functional/xef/tree/main/examples/kotlin/src/main/kotlin/com/xebia/functional/xef/conversation/sql/MysqlExample.kt).
