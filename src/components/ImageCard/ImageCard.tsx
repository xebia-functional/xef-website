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
  overlay?: boolean;
}

export interface ImageCardOptionsProps extends ImageCardProps {
  landscapeMode: boolean;
}

const videoExtensions = ['.mpg', '.mpeg', '.mp4', '.ogv', '.webm'];
const imageExtensions = ['.gif', '.jpg', '.jpeg', '.png'];

const templateElement = document.createElement('template');

export function ImageCardBase({
  title = 'Case study',
  subtitle,
  image = useBaseUrl('/img/sample-image.jpg'),
  body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie',
  href,
  landscapeMode = false,
  overlay = true,
}: ImageCardOptionsProps) {
  const imageExtension = `.${image.split('.').pop()}`;
  const isVideo = videoExtensions.includes(imageExtension);
  const isImage = imageExtensions.includes(imageExtension);

  templateElement.innerHTML = title.trim();
  const stringTitle = templateElement.content.textContent;
  const parsedTitle = parse(title);

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
            className={styles.image}
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
            autoPlay
            loop
            muted
            disablePictureInPicture>
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <div className={`card__body ${styles.body}`}>
        <h2 className={styles.title}>{parsedTitle}</h2>
        <h5 className={styles.subtitle}>{subtitle}</h5>
        <p className={styles.text}>{body}</p>
        <strong className={styles.linkContainer}>
          <Link href={href} className={styles.link}>
            Learn more
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
