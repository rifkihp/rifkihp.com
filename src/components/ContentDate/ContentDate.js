// @flow
import { graphql } from 'gatsby';
import React from 'react';

import styles from './ContentDate.module.scss';

type Props = {|
  +dateFormatted: string,
  +dateModifiedFormatted: ?string,
|};

const ContentDate = ({ dateFormatted, dateModifiedFormatted }: Props) => (
  <p className={styles['content-date']}>
    <time>{dateFormatted}</time>
    {dateModifiedFormatted && (
      <span className={styles['date-modified']}>
        &ensp;|&ensp;UPDATED <time>{dateModifiedFormatted}</time>
      </span>
    )}
  </p>
);

export const fragment = graphql`
  fragment ContentDateFragment on MarkdownRemarkFields {
    dateFormatted
    dateModifiedFormatted
  }
`;

export default ContentDate;
