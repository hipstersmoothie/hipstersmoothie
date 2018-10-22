import React from 'react';
import Head from 'next/head';
import Section from '../components/section';
import Project from '../components/project';

const DetailedProject = ({
  title,
  subtitle,
  image,
  right,
  className,
  githubLink
}) => {
  const columns = [
    <div key="info" className="column feature">
      <h1 className="title">
        <code>{title}</code>
      </h1>
      <h4>{subtitle}</h4>
      <a href={githubLink}>
        <span className="icon">
          <i className="fab fa-2x fa-github icon" />
        </span>
      </a>
      <style jsx>{`
        .icon {
          margin-top: 15px;
        }
        .feature {
          align-items: ${right ? 'flex-start' : 'flex-end'};
          text-align: ${right ? 'left' : 'right'};
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      `}</style>
    </div>,
    <div key="pic" className="column">
      <p>
        <div
          className="image"
          style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            position: 'relative'
          }}
        >
          <img
            src={image}
            alt="Markdown"
            width="300"
            height="125"
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '100%',
              marginBottom: -4
            }}
          />
        </div>
      </p>
    </div>
  ];

  if (right) {
    columns.reverse();
  }

  return (
    <Section className={`is-small section ${className}`}>
      <div className="hero-body">
        <div className="columns">{columns}</div>
      </div>
      <style jsx>{`
        :global(.section) {
          text-align: center;
        }
        :global(.section a) {
          color: #6d90d6 !important;
        }
        :global(.section a:hover) {
          color: initial !important;
        }
      `}</style>
    </Section>
  );
};

const Projects = () => (
  <div>
    <Head>
      <title>Projects</title>
    </Head>
    <h1 className="title has-text-centered top">New & Noteworthy</h1>

    <DetailedProject
      right
      title="bmp-ts"
      image="static/bmp-ts.png"
      githubLink="https://github.com/hipstersmoothie/bmp-js/"
      subtitle={
        <span>
          A typescript rewrite of <code>bmp-js</code>.<br />
          <br />
          During the rewrite I also implemented{' '}
          <strong>all bit encodings</strong> (1, 4, 8, 16, 24, 32)
        </span>
      }
    />

    <DetailedProject
      className="is-light"
      title="jimp"
      image="static/jimp.png"
      githubLink="https://github.com/oliver-moran/jimp/"
      subtitle={
        <span>
          An image processing library for Node written entirely in JavaScript,
          with zero native dependencies.
          <br />
          <br />I recently took over as maintainer of this project. I took the
          repo for ~170 issue and ~20 pull requests to{' '}
          <strong>40 issues and 0 pull requests</strong>,
        </span>
      }
    />

    <DetailedProject
      right
      title="compose-tiny"
      image="static/compose-tiny.png"
      githubLink="https://github.com/hipstersmoothie/compose-tiny"
      subtitle={
        <span>
          The smallest and quickest javascript compose function on the block.{' '}
          <strong>115B</strong>
        </span>
      }
    />

    <DetailedProject
      className="is-light"
      title="ignite"
      githubLink="https://github.com/intuit/Ignite"
      image="static/ignite.png"
      subtitle={
        <span>
          Modern markdown documentation generator
          <br />
          <br />
          Ignite uses React, so it's plugin system is just plain old React
          components. <br />
          <br />
          This means <strong>any react component</strong> can be exposed as a
          plugin for Ignite. The possibilities for expressive documentation are
          endless!
        </span>
      }
    />

    <Section className="projectSection">
      <h1 className="title has-text-centered top">Original Projects</h1>

      <div className="projects">
        <Project
          githubLink="https://github.com/hipstersmoothie/perf-table/"
          title="perf-table"
          description="Easily create a table comparing the performance of different functions. Useful for comparing npm packages and different implementations."
          image="https://camo.githubusercontent.com/c04046a4cccf3867c030838759e799e80c1bf69d/68747470733a2f2f656d6f6a6970656469612d75732e73332e6475616c737461636b2e75732d776573742d312e616d617a6f6e6177732e636f6d2f7468756d62732f3234302f6170706c652f3132392f6d616e74656c70696563652d636c6f636b5f31663537302e706e67"
        />
        <Project
          githubLink="https://github.com/hipstersmoothie/web-console-colors"
          title="web-console-colors"
          description="A colored console logger for the web."
          image="https://www.goodfreephotos.com/albums/vector-images/color-wheel-vector-clipart.png"
        />
        <Project
          githubLink="https://github.com/hipstersmoothie/probe-image-size-loader/"
          title="probe-image-size-loader"
          description="Uses probe-image-size to inject the height and width into image imports."
          image="https://camo.githubusercontent.com/36f3c35d2994799ee2392b1d9d1b4b8f48d9c495/68747470733a2f2f63646e2e7261776769742e636f6d2f7765627061636b2f6d656469612f65373438356562322f6c6f676f2f69636f6e2e737667"
        />
        <Project
          githubLink="https://github.com/hipstersmoothie/markdown-it-vanilla-loader/"
          title="markdown-it-vanilla-loader"
          description="Load markdown files to html in webpack. Uses markdown-it and assumes nothing about your configuration."
          image="https://camo.githubusercontent.com/36f3c35d2994799ee2392b1d9d1b4b8f48d9c495/68747470733a2f2f63646e2e7261776769742e636f6d2f7765627061636b2f6d656469612f65373438356562322f6c6f676f2f69636f6e2e737667"
        />
        <Project
          githubLink="https://github.com/hipstersmoothie/ignite-plugin-json-schema"
          title="ignite-plugin-json-schema"
          description="Plugin for Ignite that takes a JSON-Schema and exposes a component that matches ids to auto-generate docs."
          image="https://camo.githubusercontent.com/e1539a142ab39991422b153d22ba16b16cc4b1c4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f7069782e69656d6f6a692e636f6d2f696d616765732f656d6f6a692f6170706c652f696f732d31312f3235362f666972652e706e67"
        />
        <Project
          githubLink="https://github.com/hipstersmoothie/ignite-plugin-prop-types"
          title="ignite-plugin-prop-types"
          description="Takes a react component and displays a table with it's prop-types."
          image="https://camo.githubusercontent.com/e1539a142ab39991422b153d22ba16b16cc4b1c4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f7069782e69656d6f6a692e636f6d2f696d616765732f656d6f6a692f6170706c652f696f732d31312f3235362f666972652e706e67"
        />
        <Project
          githubLink="https://github.com/hipstersmoothie/wonderVid"
          title="kikbak.tv"
          image="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/129/television_1f4fa.png"
          description={
            <span>
              An automatically generated music video top 100 of the web.
              <br />
              <br />
              <span style={{ display: 'flex' }}>
                <a
                  href="http://kikbak.tv/"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  Hosted Here
                </a>
              </span>
            </span>
          }
        />
        <Project
          githubLink="https://github.com/hipstersmoothie/sctunes.meteor"
          title="sctunes"
          description={
            <span>
              Reimagined front end for SoundCloud. I was tired of using their
              slow interface, so I built a faster one! This project uses
              Meteor.js.
              <br />
              <br />
              <span style={{ display: 'flex' }}>
                <a
                  href="https://sctunes.herokuapp.com/login"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  Hosted Here
                </a>
              </span>
            </span>
          }
          image="http://www.stickpng.com/assets/images/58af04446c252499281ae91f.png"
        />
      </div>

      <h1 className="title has-text-centered top">Open Source Contributions</h1>

      <div className="projects">
        <Project
          titleColor="#6D929B"
          githubLink="https://github.com/coding-intl/micro-down"
          title="micro-down"
          description={
            <span>
              JavaScript based Markdown parser without dependencies.
              <br />
              <br />I helped implement the full markdown API.
            </span>
          }
          image="https://camo.githubusercontent.com/5f8cd224ffd4b0e6389834a2e4ae5c608999fa40/68747470733a2f2f636f64696e672e696e7465726e6174696f6e616c2f6173736574732f70726f6a656374732f6d6963726f646f776e2f6d6963726f646f776e2e737667"
        />
        <Project
          titleColor="#6D929B"
          githubLink="https://github.com/withspectrum/markdown-linkify"
          title="markdown-linkify"
          description={
            <span>
              Turn plain URLs in text into Markdown links. Works in the browser
              and on the server.
              <br />
              <br />
              Worked to implement edge cases.
            </span>
          }
          image="https://upload.wikimedia.org/wikipedia/commons/5/51/Octicons-markdown.svg"
        />
        <Project
          titleColor="#6D929B"
          githubLink="https://github.com/karakanb/devo"
          title="devo"
          description={
            <span>
              A Chrome and Firefox extension that displays GitHub Trending,
              Hacker News and Product Hunt on every new tab.
              <br />
              <br />
              Fixed mobile view and other display bugs.
            </span>
          }
          image="https://github.com/karakanb/devo/raw/master/img/logo.png"
        />
        <Project
          titleColor="#6D929B"
          githubLink="https://github.com/zhso/jpeg-exif"
          title="jpeg-exif"
          description={
            <span>
              Get exif infomation from jpeg format file.
              <br />
              <br />
              Added loading from a buffer and parsing TIFF type files.
            </span>
          }
          image="https://www.macupdate.com/images/icons512/39069.png"
        />
        <Project
          titleColor="#6D929B"
          githubLink="https://github.com/photopea/UTIF.js"
          title="UTIF.js"
          description={
            <span>
              Fast and advanced TIFF decoder
              <br />
              <br />
              NPM maintainer.
            </span>
          }
          image="https://unionbankph.com/images/icons/unionbankonline.jpg"
        />
        <Project
          titleColor="#6D929B"
          githubLink="https://github.com/Jam3/load-bmfont"
          title="load-bmfont"
          description={
            <span>
              loads a BMFont file in Node and the browser
              <br />
              <br />
              Added font loading from a URL.
            </span>
          }
          image="https://fontmeme.com/fonts/static/231951/bitmap-font-character-map.png"
        />
      </div>
    </Section>

    <style jsx>{`
      .top {
        padding: 2rem;
        color: #b7afa3;
        border-bottom: 3px solid #b7afa3;
        max-width: 600px;
        width: fit-content;
        margin: auto;
      }
      strong {
        color: rgba(103, 183, 246, 1) !important;
      }
      .projects {
        display: flex;
        align-items: baseline;
        flex-wrap: wrap;
      }
      :global(.projectSection) {
        margin: 2rem auto;
      }
      :global(.projectSection h1) {
        margin: 2rem auto 4rem !important;
      }
      @media screen and (min-width: 500px) {
        .projects > :global(.card) {
          flex-basis: 47%;
        }
      }
      @media screen and (min-width: 1200px) {
        .projects > :global(.card) {
          flex-basis: 30.333%;
        }
      }
      @media screen and (min-width: 1500px) {
        .projects > :global(.card) {
          flex-basis: 400px;
        }
      }
    `}</style>
  </div>
);

export default Projects;
