import React, { useEffect, useRef } from 'react';
import Cookies from 'js-cookie';

const Loader = () => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const h3Ref = useRef<HTMLHeadingElement>(null);
  const redCircleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasSeenLoader = Cookies.get('loaderSeen');
    const loader = loaderRef.current;
    const h3 = h3Ref.current;
    const redCircle = redCircleRef.current;

    if (hasSeenLoader && loader) {
      loader.classList.add('hide');
    } else {
      Cookies.set('loaderSeen', 'true', { expires: 1 });

      if (h3) h3.classList.remove('hide');
      if (redCircle) redCircle.classList.remove('hide');

      const hideLoaderTimeout = setTimeout(() => {
        if (loader) {
          loader.classList.add('hide');
        }
      }, 1500);

      const removeLoaderTimeout = setTimeout(() => {
        if (loader) {
          // loader.remove();
        }
      }, 3000);

      return () => {
        clearTimeout(hideLoaderTimeout);
        clearTimeout(removeLoaderTimeout);
      };    }
  }, []);

  return (
    <div ref={loaderRef} className="Loader flex items-center justify-center">
      <h3 ref={h3Ref} className="hide">REC</h3>
      <div ref={redCircleRef} className="hide red-circle"></div>
    </div>
  );
};

export default Loader;
