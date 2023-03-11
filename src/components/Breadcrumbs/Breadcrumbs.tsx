import React from 'react';

import { v4 as uuidv4 } from 'uuid';
import { Link, useLocation } from 'react-router-dom';
import s from './Breadcrumbs.module.scss';
import homeIcon from './icons/home-icon-breadcrumbs.svg';

type Props = {
  productName?: string;
};

export const Breadcrumbs: React.FC<Props> = ({ productName }) => {
  const { pathname } = useLocation();

  const pathArray = pathname.split('?')[0].split('/').slice(1);

  return (
    <nav className={s.breadcrumbs} aria-label="breadcrumb">
      <Link to="/" className={s.breadcrumbs__link}>
        <img src={homeIcon} className={s.breadcrumbs__home_img} alt="home" />
      </Link>

      {pathArray.map((path, index) => {
        let linkText = '';

        // If productName prop present, we use it as the last breadcrumb link text
        if (index === pathArray.length - 1 && productName) {
          linkText = productName;
        } else {
          linkText = path.charAt(0).toUpperCase() + path.slice(1);
        }

        return (
          <Link key={uuidv4()} to={`/${path}`} className={s.breadcrumbs__link}>
            {linkText}
          </Link>
        );
      })}
    </nav>
  );
};
