import React, { Component } from 'react';

const Project = ({ title, githubLink, description, image }) => (
  <div className="card project">
    <header className="card-header">
      <p className="card-header-title is-centered">{title}</p>
    </header>
    <div className="card-content">
      <div className="content">
        <div className="level project-image">
          <div className="level-item">
            <img className="image is-128x128" src={image} />
          </div>
        </div>
        {description}
      </div>
    </div>
    <footer className="card-footer">
      <a href={githubLink} className="card-footer-item">
        GitHub{' '}
        <span className="icon">
          <i className="fab fa-github icon" />
        </span>
      </a>
    </footer>
    <style jsx>{`
      .project {
        margin: 1.5%;
      }
      .project-image {
        margin-bottom: 15px;
      }
      .icon {
        line-height: 22px;
        margin-left: 10px;
      }
    `}</style>
  </div>
);

export default Project;
