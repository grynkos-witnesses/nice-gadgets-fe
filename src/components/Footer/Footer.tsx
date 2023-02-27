/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from 'react';

export const Footer: React.FC = memo(() => {
  return (
    <footer className="footer">
      <a
        className="logo"
        href="#"
      >
        <img
          className="logo_image"
          src="./Logo.svg"
          alt="NiceGadgets"
        />
      </a>
    </footer>
  );
});
