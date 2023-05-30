import React, { ReactNode } from 'react';

import Link from '@docusaurus/Link';

import styles from './hero.module.css';

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
      <div className={`container`}>
        <h1 className={`hero__title ${styles.max}`}>{title}</h1>
        {subtitle && (
          <h2 className={`${styles.subtitle} ${styles.max}`}>{subtitle}</h2>
        )}
        <div className={styles.ctaList}>
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
  );
}
