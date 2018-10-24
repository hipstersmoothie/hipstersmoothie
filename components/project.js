import React from 'react';

const Project = ({ title, githubLink, description, image, titleColor }) => (
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
        {typeof description === 'string' ? <p>{description}</p> : description}
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
        margin: 1.5rem 0;
      }
      .project header {
        background-color: ${titleColor || '#c1dad6'};
      }
      .project header p {
        color: white;
      }
      .project-image {
        margin-bottom: 15px;
      }
      .icon {
        line-height: 22px;
        margin-left: 10px;
      }
      @media screen and (min-width: 767px) {
        .project {
          margin: 1.5%;
        }
      }
    `}</style>
  </div>
);

export default Project;
