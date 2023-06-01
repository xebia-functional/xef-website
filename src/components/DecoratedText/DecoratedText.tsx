import React from 'react';

import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './decorated-text.module.css';

export interface DecoratedTextProps {
  children: string;
  icon: string;
  title?: string;
  width?: string;
  height?: string;
}

export const DecoratedText = ({
  children,
  icon,
  title,
  width = '64px',
  height = '64px',
}: DecoratedTextProps): JSX.Element => (
  <>
    <img
      className={styles.icon}
      src={useBaseUrl(`/img/${icon}`)}
      alt={'Icon'}
      title={'Icon'}
      width={width}
      height={height}
    />
    {title ? title : children}
  </>
);
