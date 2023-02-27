import React, { memo } from 'react';
import { FooterNavLink } from '../FooterNavLink/FooterNavLink';
import FooterSCSS from '../Footer.module.scss';

export const FooterNav: React.FC = memo(() => {
  return (
    <div className={FooterSCSS.navigation}>
      <FooterNavLink to="https://github.com/grynkos-witnesses/nice-gadgets-fe" text="github" />
      <FooterNavLink to="/contacts" text="contacts" />
      <FooterNavLink to="/rights" text="rights" />
    </div>
  );
});
