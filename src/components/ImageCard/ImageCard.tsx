import React from 'react';
import * as cheerio from 'cheerio';
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
  overlay?: boolean;
}

export interface ImageCardOptionsProps extends ImageCardProps {
  landscapeMode: boolean;
}

const videoExtensions = ['webm', 'mp4', 'mpg', 'mpeg', 'ogv'];
const imageExtensions = ['webp', 'png', 'jpg', 'jpeg', 'gif', 'svg'];

export function ImageCardBase({
  title = 'Case study',
  subtitle,
  image = useBaseUrl('/img/sample-image.jpg'),
  body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie',
  href,
  linkText = 'Learn more',
  landscapeMode = false,
  overlay = true,
}: ImageCardOptionsProps) {
  const imageExtension = `${image.split('.').pop()}`;
  const isVideo = videoExtensions.includes(imageExtension);
  const isImage = imageExtensions.includes(imageExtension);

  const parsedTitle = parse(title);
  const stringTitle = cheerio.load(title).text();

  return (
    <div
      className={`card ${styles.card} ${
        landscapeMode && styles.landscapeMode
      }`}>
      <div
        className={`card__image ${styles.imageContainer} ${
          overlay ? styles.overlay : ''
        }`}>
        {isImage && (
          <img
            className={`${styles.image} ${!overlay ? styles.fit : ''}`}
            src={image}
            alt={`${stringTitle}`}
            title={`${stringTitle}`}
          />
        )}
        {isVideo && (
          <video
            className={styles.image}
            width="100%"
            height="100%"
            src={image}
            title={`${stringTitle}`}
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture>
            {`${stringTitle} video`}
          </video>
        )}
      </div>
      <div className={`card__body ${styles.body}`}>
        <h2 className={styles.title}>{parsedTitle}</h2>
        <h5 className={styles.subtitle}>{subtitle}</h5>
        <p className={styles.text}>{body}</p>
        <strong>
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
