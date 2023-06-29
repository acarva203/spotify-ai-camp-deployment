import React, { ReactNode } from 'react';
import CustomNavbar from '../sections/Navbar';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomNavbar />
      <div className="custom-mt-1 flex-grow">
        {children}
      </div>
    </div>
  );
}

export default Layout;
