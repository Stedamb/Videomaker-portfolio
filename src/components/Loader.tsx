import React, { useEffect, useState, useRef } from 'react';
import Cookies from 'js-cookie';

const Loader = () => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const hasSeenLoader = Cookies.get('loaderSeen');
    if (hasSeenLoader) {
      setShowLoader(false);
    } else {
      Cookies.set('loaderSeen', 'true', { expires: 1 });
    }

    const loader = loaderRef.current;
    if (loader) {
      loader.classList.remove("hide");
      
      setTimeout(() => {
        if (loader) {
          loader.classList.add("hide");
        }
      }, 1500);

      setTimeout(() => {
        if (loader) {
          loader.classList.remove("flex");
          loader.classList.add("hidden");
        }
      }, 2000);
    }
  }, []);

  return (
    showLoader && (
      <div ref={loaderRef} className="Loader hide flex items-center justify-center">
        <h3>REC</h3>
        <div className="red-circle"></div>
      </div>
    )
  );
};

export default Loader;
