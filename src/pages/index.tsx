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
              <TabItem value="kotlin" label="Kotlin">
                <CodeBlock language="kotlin" showLineNumbers>
                  {`package examples

import com.xebia.functional.xef.conversation.llm.openai.OpenAI
import com.xebia.functional.xef.conversation.llm.openai.prompt
import kotlinx.serialization.Serializable

@Serializable
data class TouristAttraction(val name: String, val location: String, val history: String)

suspend fun main() =
  OpenAI.conversation {
    val statueOfLiberty: TouristAttraction = prompt("Statue of Liberty location and history.")
    println(
      """|\${statueOfLiberty.name} is located in \${statueOfLiberty.location} and has the following history:
                 |\${statueOfLiberty.history}"""
        .trimMargin()
    )
  }
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
