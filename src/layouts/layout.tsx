import React, { ReactNode } from 'react';
import CustomNavbar from '../sections/Navbar';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div>
      <CustomNavbar />
      <div className="custom-mt-1">
        {children}
      </div>
    </div>
  );
}

export default Layout;

