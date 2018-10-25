import React from 'react';
import Router from 'next/router';
import Link from 'next/link';

const Stats = () => (
  <div className="level stats is-mobile">
    <div className="level-item has-text-centered link">
      <div>
        <p className="heading">GitHub</p>
        <p className="title">
          <a
            href="https://github.com/hipstersmoothie"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
          </a>
        </p>
      </div>
    </div>
    <div className="level-item has-text-centered link">
      <div>
        <p className="heading">Twitter</p>
        <p className="title">
          <a
            href="https://twitter.com/HipsterSmoothie"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter" />
          </a>
        </p>
      </div>
    </div>
    <div className="level-item has-text-centered link">
      <div>
        <p className="heading">Email</p>
        <p className="title">
          <a
            href="mailto:lisowski54@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="far fa-envelope" />
          </a>
        </p>
      </div>
    </div>
    <div className="level-item has-text-centered link">
      <div>
        <p className="heading">NPM</p>
        <p className="title">
          <a
            href="https://www.npmjs.com/~alisowski"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-npm" />
          </a>
        </p>
      </div>
    </div>
    <style jsx>{`
      .stats {
        margin: 4em auto 0;
      }
      .link p + p:hover {
        color: #e8d0a9;
      }
    `}</style>
  </div>
);

const Header = ({ active }) => (
  <section className="hero is-dark header">
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="level">
          <div className="level-item">
            <figure className="image" style={{ width: 150 }}>
              <img
                className="is-rounded"
                src="https://avatars2.githubusercontent.com/u/1192452?s=400&v=4"
              />
            </figure>
          </div>
        </div>
        <h1 className="title name">Hi, I'm Andrew Lisowski</h1>
        <Stats />
      </div>
    </div>

    <div className="hero-foot">
      <nav className="tabs is-boxed is-fullwidth">
        <ul>
          <li className={!active && 'is-active'}>
            <a href="/" onClick={() => Router.push('/')}>
              Overview
            </a>
          </li>
          <li className={active === 'projects' && 'is-active'}>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li className={active === 'blog' && 'is-active'}>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    <style jsx>{`
      :global(.content li) {
        margin-top: 0.25em;
      }
      .header {
        background: #6d929b !important;
      }
      .name {
        margin-bottom: 2em;
      }
      :global(.tabs ul) {
        margin: 0 1rem;
      }
    `}</style>
  </section>
);

export default Header;
