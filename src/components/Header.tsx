import React from 'react';
import type { ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className="lazyload container-lg">
      {children}
    </div>
  );
};

export default Header;
