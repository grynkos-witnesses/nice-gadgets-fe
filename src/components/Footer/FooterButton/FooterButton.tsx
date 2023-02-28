/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import FooterSCSS from '../Footer.module.scss';

export const FooterButton: React.FC = memo(() => {
  return (
    <Link to="/" className={[FooterSCSS.link_back_to_top, FooterSCSS.link].join(' ')}>Back to top</Link>
  );
});
