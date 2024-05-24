import React from 'react';
import type { ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className="container-lg px-4">
      {children}
    </div>
  );
};

export default Header;
