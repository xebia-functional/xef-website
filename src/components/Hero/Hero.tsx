import React, { ReactNode } from 'react';

import Link from '@docusaurus/Link';

import styles from './hero.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export interface HeroProps extends Partial<Styled> {
  title: string | ReactNode;
  subtitle?: string;
  ctaList?: Array<Cta>;
}



export function Hero({
  title,
  subtitle,
  ctaList,
  className: classNameProp,
}: HeroProps): JSX.Element {
  return (
    <div className={`hero ${styles.hero} ${classNameProp}`}>
      <div className="container">
      <div className="row">
        <div className="col col--5">
        <div className={`${styles.col}`}>
          <h1 className={`hero__title ${styles.max}`}>{title}</h1>
          {subtitle && (
            <h2 className={`${styles.subtitle} ${styles.max}`}>{subtitle}</h2>
          )}
          <div>
            <p className={`${styles.max} ${styles.description}`}>XEF is a library to bring the power of modern AI to your application or service, in the form of LLM (Large Language Models), image generation, and many others.</p>
          </div>
          <div className={`${styles.ctaList} ${styles.max}`}>
            {ctaList &&
              ctaList.map(({ title, href, elementClassName = '' }) => (
                <Link
                  key={title}
                  href={href}
                  className={`button button--primary button--lg ${elementClassName}`}>
                  {title}
                </Link>
              ))}
          </div>
          </div>
          </div>

          <div className="col col--7">
            <div className={`${styles.playvideo}`}>
            <a href="https://vimeo.com/836615540">
                <img src={useBaseUrl("/img/play-video.svg")} alt=""/>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
