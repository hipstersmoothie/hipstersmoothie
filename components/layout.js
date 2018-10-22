import React from 'react';
import Footer from './footer';
import Header from './header';

const Layout = ({ children, active }) => (
  <div className="is-fullhd">
    <Header active={active} />
    {children}
    <Footer />
    <style jsx>{`
      :global(body a) {
        color: #73b2d9;
      }
    `}</style>
  </div>
);

export default Layout;
