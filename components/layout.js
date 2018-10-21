import React from 'react';
import Footer from './footer';
import Header from './header';

const Layout = ({ children, active }) => (
  <div className="is-fullhd">
    <Header active={active} />
    {children}
    <Footer />
  </div>
);

export default Layout;
