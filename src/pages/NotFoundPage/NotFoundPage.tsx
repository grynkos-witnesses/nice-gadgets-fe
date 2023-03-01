import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import notFoundSvg from './notFound.svg';
import NotFoundSCSS from './NotFoundPage.module.scss';

export const NotFoundPage: React.FC = memo(() => (
  <div className={NotFoundSCSS.notFoundContainer}>
    <img
      src={notFoundSvg}
      alt="pageNotFound"
      className={NotFoundSCSS.notFoundSvg}
    />
    <Link to="/home" className={NotFoundSCSS.btn}>
      Home
    </Link>
  </div>
));
