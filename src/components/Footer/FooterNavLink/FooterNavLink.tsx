import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import FooterSCSS from '../Footer.module.scss';

type Props = {
  to: string;
  text: string;
};

export const FooterNavLink: React.FC<Props> = memo(({ to, text }) => (
  <NavLink
    to={to}
    className={FooterSCSS.link}
  >
    {text}
  </NavLink>
));
