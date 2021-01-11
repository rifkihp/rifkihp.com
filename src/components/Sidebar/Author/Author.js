import { Link, withPrefix } from 'gatsby';
import React from 'react';

import DarkModeToggle from '../../DarkModeToggle';
import styles from './Author.module.scss';

const Author = ({ author }) => (
  <div className={styles['author']}>
    <div className={styles['author__main-section']}>
      <Link to="/">
        <div className={styles['relative']}>
          
          <div aria-hidden="true">
            <div className={styles['relative-blob']}>
              <svg
                className={styles['blob-rotate-faster']}
                viewBox="0 0 278 279"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M137.896 0.127761C167.59 -0.638578 198.383 1.62824 222.877 18.4301C247.738 35.4836 263.129 63.014 271.706 91.9151C280.118 120.258 280.513 150.661 270.364 178.43C260.457 205.538 239.342 225.92 216.353 243.372C192.903 261.174 167.336 278.631 137.896 278.994C108.28 279.358 81.0666 263.928 58.0226 245.322C35.8955 227.455 20.5343 203.415 11.0775 176.594C1.41508 149.191 -4.23875 119.749 3.91245 91.8587C12.2111 63.4638 31.6331 39.4483 56.0438 22.7357C79.9856 6.34414 108.89 0.876363 137.896 0.127761Z" />
              </svg>
              <img src={withPrefix(author.photo)} className={styles['author__photo']} alt={author.name} />
            </div>
          </div>
        </div>
      </Link>
      <div className={styles['author__title']}>
        <h1>
          <Link className={styles['author__title-link']} to="/">
            {author.name}
          </Link>
        </h1>
        <DarkModeToggle />
      </div>
    </div>
    <p className={styles['author__subtitle']} dangerouslySetInnerHTML={{ __html: author.bio }} />
  </div>
);

export default Author;
