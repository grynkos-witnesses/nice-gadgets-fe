import React from 'react';

import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';
import homeIcon from './icons/home-icon-breadcrumbs.svg';

type Props = {
  location: string[];
};

export const Breadcrumbs: React.FC<Props> = ({ location }) => {
  return (
    <nav className={styles.breadcrumbs}>
      {location.map((page) => (
        <Link
          key={uuidv4()}
          to={`${page}`}
          className={styles.breadcrumbs__link}
        >
          {page === '/' ? (
            <img
              src={homeIcon}
              className={styles.breadcrumbs__home_img}
              alt="home"
            />
          ) : (
            `${page[1].toUpperCase()}${page.slice(2)}`
          )}
        </Link>
      ))}
    </nav>
  );
};
