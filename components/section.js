import React from 'react';

const Section = ({ children, className, isLight }) => (
  <section
    className={`hero is-small ${className} ${isLight ? 'is-light' : ''}`}
  >
    <div className="hero-body">
      <div className="container">{children}</div>
    </div>

    <style jsx>{`
      .stats {
        margin: 4em auto 0;
      }
    `}</style>
  </section>
);

export default Section;
