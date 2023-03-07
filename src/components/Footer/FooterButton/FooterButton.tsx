import React, { memo, useState } from 'react';
import FooterSCSS from '../Footer.module.scss';

export const FooterButton: React.FC = memo(() => {
  const [, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={[FooterSCSS.link_back_to_top, FooterSCSS.link].join(' ')}
    >
      Back to top
    </button>
  );
});
