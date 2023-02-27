import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import logo from './Logo.svg';
import LogoSCSS from './Logo.module.scss';

export const Logo: React.FC = memo(() => {
  return (
    <Link className={LogoSCSS.logo} to="/">
      <img src={logo} className="logo_image" alt="NiceGadgets" />
    </Link>
  );
});
