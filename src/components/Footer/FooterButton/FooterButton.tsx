import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import FooterSCSS from '../Footer.module.scss';

export const FooterButton: React.FC = memo(() => {
  return (
    <div className={FooterSCSS.back_to_top}>
      <Link to="/" className={[FooterSCSS.link_back_to_top, FooterSCSS.link].join(' ')}>Back to top</Link>
      <button
        className={FooterSCSS.btn}
        type="button"
      >
      </button>
    </div>
  );
});
