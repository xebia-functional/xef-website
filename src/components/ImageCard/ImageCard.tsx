import React from 'react';
import parse from 'html-react-parser';

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './image-card.module.css';

export interface ImageCardProps {
  title?: string;
  subtitle?: string;
  image?: string;
  body?: string;
  href?: string;
  linkText?: string;
}

export interface ImageCardOptionsProps extends ImageCardProps {
  landscapeMode: boolean;
}

export function ImageCardBase({
  title = 'Case study',
  subtitle,
  image = useBaseUrl('/img/sample-image.jpg'),
  body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie',
  href,
  landscapeMode = false,
  linkText = 'Learn more',
}: ImageCardOptionsProps) {
  return (
    <div
      className={`card ${styles.card} ${
        landscapeMode && styles.landscapeMode
      }`}>
      <div className={`card__image ${styles.imageContainer}`}>
        <img
          className={styles.image}
          src={image}
          alt={`${parse(title)}`}
          title={`${parse(title)}`}
        />
      </div>
      <div className={`card__body ${styles.body}`}>
        <h2 className={styles.title}>{parse(title)}</h2>
        <h5 className={styles.subtitle}>{subtitle}</h5>
        <p className={styles.text}>{body}</p>
        <strong className={styles.linkContainer}>
          <Link href={href} className={styles.link}>
            {linkText}
          </Link>
        </strong>
      </div>
    </div>
  );
}

export const ImageCardLandscape = (props: ImageCardProps) => (
  <ImageCardBase landscapeMode {...props} />
);

export const ImageCard = (props: ImageCardProps) => (
  <ImageCardBase landscapeMode={false} {...props} />
);
