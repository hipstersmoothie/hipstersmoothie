import React, { Component } from 'react';
import Head from 'next/head';
import { Link } from 'next-prefixed';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import 'github-calendar/dist/github-calendar-responsive.css';
import 'github-calendar/dist/github-calendar.css';
import Section from '../components/section';
import ContributionsGraph from '../components/contributions-graph';
import Project from '../components/project';

const Workplace = ({ logo, title, place, location, description, date }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work content VerticalTimelineElement-wrapper"
    date={date}
    iconStyle={{
      background: 'white',
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
    icon={<img className="image circle" src={logo} />}
  >
    <h3 className="vertical-timeline-element-title">{title}</h3>
    <h6>
      <span className="place">{place}</span>,{' '}
      <span className="location">{location}</span>
    </h6>

    {typeof description === 'string' ? <p>{description}</p> : description}

    <style jsx>{`
      :global(.VerticalTimelineElement-wrapper) {
        color: #363636 !important;
      }
      .place {
        font-weight: 500;
      }
      .location {
        font-weight: 200;
      }
      .circle {
        border-radius: 50%;
      }
    `}</style>
  </VerticalTimelineElement>
);

class Index extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Andrew Lisowski</title>
        </Head>
        <Section className="has-text-centered">
          <div className="intro">
            <h2 className="title is-spaced">
              I'm a professional software developer.
            </h2>
            <p className="subtitle">
              I <em>love</em> to code. Open source is my hobby and{' '}
              <strong>passion</strong>.
            </p>
          </div>
          <p className="subtitle">
            Here are a few projects that I've worked on recently that I'm proud
            of.
          </p>
          <div className="columns projects">
            <Project
              className="column"
              githubLink="https://github.com/oliver-moran/jimp/"
              title="Jimp"
              description="An image processing library written entirely in JavaScript for Node, with zero external or native dependencies."
              image="https://camo.githubusercontent.com/6e9aac6934fcc8a8ac260b23b839cae4d9d40f8a/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f7069782e69656d6f6a692e636f6d2f696d616765732f656d6f6a692f6170706c652f696f732d31312f3235362f637261796f6e2e706e67"
            />
            <Project
              className="column"
              githubLink="https://github.com/intuit/Ignite"
              title="Ignite"
              description="Modern markdown documentation generation build around extensibility and first class React plugins."
              image="https://camo.githubusercontent.com/e1539a142ab39991422b153d22ba16b16cc4b1c4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f7069782e69656d6f6a692e636f6d2f696d616765732f656d6f6a692f6170706c652f696f732d31312f3235362f666972652e706e67"
            />
            <Project
              className="column"
              image="https://github.com/hipstersmoothie/bmp-js/raw/master/logo.png"
              githubLink="https://github.com/hipstersmoothie/bmp-js"
              title="bmp-ts"
              description="A pure typescript BMP encoder and decoder for node.js. Supports decoding and encoding in all bit depths (1, 4, 8, 16, 24, 32)."
            />
          </div>

          <ContributionsGraph />

          <p className="subtitle intro">
            I'm always looking for cool new project to contribute to so don't be
            afraid to <strong>contact me</strong>!
          </p>
        </Section>

        <Section className="has-text-centered is-dark is-awesome">
          <h1 className="title">Background</h1>
          <p>
            <span className="college">Residence:</span> San Diego, California
          </p>
          <p>
            <span className="college">College:</span> California Polytechnic
          </p>
          <p>
            <span className="college">Phone:</span>{' '}
            <a href="tel:1-619-540-6339">1-619-540-6339</a>
          </p>

          <div>
            <VerticalTimeline>
              <Workplace
                date="2017 - Present"
                place="Intuit"
                title="Software Engineer II - Web Player"
                location="San Diego, Ca"
                description={
                  <ul style={{ textAlign: 'left' }}>
                    <li>
                      Helped to move the player to a headless architecture,
                      which allowed us to test the player faster and separate
                      core logic from the player
                    </li>
                    <li>
                      Rewrote old Java automation in typescript using headless
                      chrome.
                    </li>
                    <li>
                      Developed various tools to help customers use the player
                    </li>
                  </ul>
                }
                logo="http://assets.stickpng.com/thumbs/5848092acef1014c0b5e48fa.png"
              />{' '}
              <Workplace
                date="2016 - 2017"
                place="Intuit"
                title="Software Engineer I - Web Player"
                location="San Diego, Ca"
                description={
                  <ul style={{ textAlign: 'left' }}>
                    <li>
                      Worked to build a json driven declarative UI framework
                    </li>
                    <li>
                      Refactored framework from an assortment of libraries
                      (handlebars, jquery, etc) to a React App
                    </li>
                    <li>
                      Helped to replatform old TurboTax content using the
                      declarative UI framework
                    </li>
                  </ul>
                }
                logo="http://assets.stickpng.com/thumbs/5848092acef1014c0b5e48fa.png"
              />
              <Workplace
                date="2016"
                place="Intuit"
                title="Intern - Web Player"
                location="San Diego, Ca"
                description={
                  <ul style={{ textAlign: 'left' }}>
                    <li>
                      Helped develop the Web Player and Fuego.js - a json driven
                      declarative UI framework written in React
                    </li>
                    <li>
                      Fixed bugs submitted by QA and customers (other teams)
                    </li>
                    <li>
                      Integrated with tools team to improve Flint - a GUI for
                      building Fuego content
                    </li>
                  </ul>
                }
                logo="http://assets.stickpng.com/thumbs/5848092acef1014c0b5e48fa.png"
              />
              <Workplace
                date="2014 - 2015"
                place="Intuit"
                title="Intern - It's Deductible Online"
                location="San Diego, Ca"
                description={
                  <ul style={{ textAlign: 'left' }}>
                    <li>
                      Developed new front end web architecture for It's
                      Deductible Online (IDO)
                    </li>
                    <li>Simplified user interaction with existing back end</li>
                    <li>Tested 80% of the application</li>
                  </ul>
                }
                logo="http://assets.stickpng.com/thumbs/5848092acef1014c0b5e48fa.png"
              />
              <Workplace
                date="2013"
                place="Intuit"
                title="Intern - MyTurboTax"
                location="San Diego, Ca"
                description={
                  <ul style={{ textAlign: 'left' }}>
                    <li>
                      Developed front end web applications for TurboTaxOnline
                    </li>
                    <li>
                      Implemented the page that shows the user their past tax
                      returns and orders
                    </li>
                    <li>Fixed bugs in the application</li>
                  </ul>
                }
                logo="http://assets.stickpng.com/thumbs/5848092acef1014c0b5e48fa.png"
              />
              <Workplace
                date="2012"
                place="Moon Valley Software"
                title="Intern"
                location="Arroyo Grande, Ca"
                description={
                  <ul style={{ textAlign: 'left' }}>
                    <li>Helped with database maintenance and operations</li>
                    <li>
                      Built page scrappers for multiple business listing
                      websites
                    </li>
                    <li>Managed a few customer accounts</li>
                  </ul>
                }
                logo="https://media.licdn.com/dms/image/C560BAQGdzTQiR_efmw/company-logo_400_400/0?e=1548288000&v=beta&t=g7sAWZMKLG5kB_lnHFZBm_9jZ8uuMcFC47b537biVN0"
              />
              <Workplace
                date="2011"
                place="Subway"
                title="Sandwich Artist"
                location="Ramona, Ca"
                description="Crafted delectable fast food sandwich creations."
                logo="https://www.itsnicethat.com/system/files/082016/57a8aefb7fa44ccc87005619/images_slice_large/Subway_existing-logo_itsnicethat1.jpg?1470672641"
              />
            </VerticalTimeline>
          </div>
        </Section>

        <Section className="is-medium has-text-centered">
          <h3 className="title">
            Want to know more about me? Check out my{' '}
            <Link href="/projects">
              <a>projects</a>
            </Link>{' '}
            or read my{' '}
            <Link href="/blog">
              <a>blog</a>
            </Link>
            .
          </h3>
        </Section>

        <style jsx>{`
          strong {
            color: rgba(103, 183, 246, 1);
          }
          .college {
            font-weight: 600;
          }
          .projects {
            margin: 3rem 1rem !important;
          }
          :global(.is-awesome) {
            background: rgb(238, 174, 202);
            background: radial-gradient(circle, #c1dad6 0%, #6d929b 100%);
          }
          :global(.vertical-timeline-element-date) {
            text-align: center !important;
            color: white !important;
          }
          .intro {
            padding: 20px;
          }
          @media screen and (min-width: 767px) {
            .projects {
              margin: 4rem !important;
            }
            .intro {
              padding: 60px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Index;
