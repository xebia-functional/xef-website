import React from 'react';
import parse from 'html-react-parser';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Hero } from '@site/src/components/Hero';
import { ImageCardLandscape } from '@site/src/components/ImageCard';
import { LinkCardProps } from '@site/src/components/LinkCard';

import data from './index.yml';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout description={siteConfig.tagline}>
      <Hero title={parse(data.hero.title)} ctaList={data.hero.ctaList} />
      <main>
        <section
          className={`${styles.featuresContainer} ${styles.verticalRhythm}`}>
          {data.features.map((feature: LinkCardProps) => (
            <ImageCardLandscape key={feature.title} {...feature} />
          ))}
        </section>
        <section className={`${styles.codeWrapperContainer}`}>
          <div className={`container ${styles.codeContainer}`}>
            <h1>Discover its potential</h1>
            <Tabs>
              <TabItem value="scala" label="Scala">
                <CodeBlock language="scala" showLineNumbers>
                  {`@main def runPopulation: Unit =
ai {
  val cadiz: Population = prompt("Population of Cádiz, Spain.")
  val seattle: Population = prompt("Population of Seattle, WA.")
  println(s"The population of Cádiz is \${cadiz.size} and the population of Seattle is \${seattle.size}")
}`}
                </CodeBlock>
              </TabItem>
              <TabItem value="kotlin" label="Kotlin">
                <CodeBlock language="kotlin" showLineNumbers>
                  {`@Serializable
data class Population(val size: Int, val description: String)

@Serializable
data class Image(
    val description: String,
    val url: String,
)

suspend fun main() =
    ai {
        val cadiz: Population = prompt("Population of Cádiz, Spain.")
        val seattle: Population = prompt("Population of Seattle, WA.")
        val img: Image = image("A hybrid city of Cádiz, Spain and Seattle, US.")
        println(img)
        println("The population of Cádiz is \${cadiz.size} and the population of Seattle is \${seattle.size}")
    }.getOrElse { println(it) }
              `}
                </CodeBlock>
              </TabItem>
            </Tabs>
          </div>
        </section>
      </main>
    </Layout>
  );
}
