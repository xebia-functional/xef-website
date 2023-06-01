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
      <Hero
        title={parse(data.hero.title)}
        ctaList={data.hero.ctaList}
        className="margin-bottom--xl"
      />
      <main id="discover">
        <section
          className={`${styles.featuresContainer} ${styles.verticalRhythm}`}>
          {data.features.map((feature: LinkCardProps) => (
            <ImageCardLandscape
              key={feature.title}
              {...feature}
              overlay={false}
            />
          ))}
        </section>
        <section className={`${styles.codeWrapperContainer}`}>
          <div className={`container ${styles.codeContainer}`}>
            <h1 className="margin-bottom--lg">Discover its potential</h1>
            <Tabs>
              <TabItem value="scala" label="Scala">
                <CodeBlock language="scala" showLineNumbers>
                  {`final case class Population(size: Int, description: String) derives ScalaSerialDescriptor, Decoder

                  final case class Image(description: String, url: String) derives ScalaSerialDescriptor, Decoder

                  @main def runPopulation: Unit =
ai {
  val cadiz: Population = prompt("Population of Cádiz, Spain.")
  val seattle: Population = prompt("Population of Seattle, WA.")
  println(s"The population of Cádiz is \${cadiz.size} and the population of Seattle is \${seattle.size}")
  val img: Image = image("A hybrid city of Cádiz, Spain and Seattle, US.")
  println(s"Image \${img.description} available at \${img.url}")
}`}
                </CodeBlock>
              </TabItem>
              <TabItem value="kotlin" label="Kotlin">
                <CodeBlock language="kotlin" showLineNumbers>
                  {`@Serializable
data class Population(val size: Int, val description: String)

@Serializable
data class Image(val description: String, val url: String)

suspend fun main() =
    ai {
        val cadiz: Population = prompt("Population of Cádiz, Spain.")
        val seattle: Population = prompt("Population of Seattle, WA.")
        println("The population of Cádiz is \${cadiz.size} and the population of Seattle is \${seattle.size}")
        val img: Image = image("A hybrid city of Cádiz, Spain and Seattle, US.")
        println("Image \${img.description} available at \${img.url}")
    }.getOrThrow()
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
