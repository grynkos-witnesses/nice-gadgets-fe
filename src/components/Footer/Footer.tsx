import React, { memo } from 'react';
import { Logo } from '../Logo/Logo';
import { FooterButton } from './FooterButton/FooterButton';
import { FooterNav } from './FooterNav/FooterNav';
import FooterSCSS from './Footer.module.scss';

export const Footer: React.FC = memo(() => {
  return (
    <footer className={FooterSCSS.footer}>
      <Logo />
      <FooterNav />
      <FooterButton />
    </footer>
  );
});
