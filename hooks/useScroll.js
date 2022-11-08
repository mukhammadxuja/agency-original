import React from 'react';

export const useScroll = () => {
  const [scroll, setScroll] = React.useState(false);

  React.useEffect(() => {
    let lastScroll = window.scrollY;
    window.addEventListener('scroll', () => {
      if (lastScroll < window.scrollY) {
        setScroll(true);
      } else {
        setScroll(false);
      }

      lastScroll = window.scrollY;
    });
  }, []);

  return { scroll };
};
