import React, { useState } from 'react';
import Contact from '../components/Contact';
import Card from '../components/Card';
import jobs from "../data/experience.json";
import '../assets/h-a-cv-22.pdf';
import '../assets/Hermione_Archer_React_Developer.pdf';

const Home = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div id="container--main">
      <section id="wrapper--hero" className="section--page">
        <img
          id="profile-pic"
          alt="Profile"
          src="https://github.com/hermionearcher/react-digital-cv/blob/main/digital-cv/assets/images/h-a-profile-picture.JPG?raw=true"
        />

        <div>
          <h1 id="user-name">Me...</h1>
          <p id="bio">
            Lead JavaScript Software Developer{' '}
            <a
              href="https://www.yorkshirewater.com/"
              target="_blank"
              rel="noreferrer"
            >
              Yorkshire Water
            </a>
            , previously at{' '}
            <a href="https://atos.net/en/" target="_blank" rel="noreferrer">
              Atos
            </a>{' '}
            as a Angular developer.
          </p>
          <p id="email">
            👉<a href="#contact"> Let's talk</a>
          </p>
        </div>
      </section>

      <section className="section--page">
        <div id="socials--list">
          {/* <a href="#my-work">My Projects</a> */}
          <a href="https://www.linkedin.com/in/h-archer/" target="_blank">
            Linkedin
          </a>
          <a href="https://github.com/hermionearcher" target="_blank">
            Github
          </a>
          {/* <a href="/blog">Blog Posts</a> */}
          <a href={require('../assets/Hermione_Archer_React_Developer.pdf')} rel="noreferrer" target="_blank">
            Download my CV
          </a>
        </div>
      </section>

      <div className="line-break"></div>
      <section className="section--page">
        <h2>Skills & Qualifications</h2>
        <ul id="qualifications--list">
          <li>✔️ 1 Year industry experience as a developer </li>
          <li>✔️ Data and SQL Certification</li>
          <li>
            ✔️ 150 hours+ JavaScript Algorithms and Data Structures course
          </li>
          <li>✔️ Agile Awareness Level 1 Certification </li>
        </ul>
      </section>

      <section className="section--page">
        <h2>Tech stack</h2>

        <div id="wrapper--techstack__items">
          <div className="card--techstack">
            <span>React</span>
          </div>
          <div className="card--techstack">
            <span>Angular</span>
          </div>
          <div className="card--techstack">
            <span>Node JS</span>
          </div>
          <div className="card--techstack">
            <span>MySQL</span>
          </div>
        </div>
      </section>

      <section id="work-history-wrapper" className="section--page">
        <h2>Work History</h2>

        {jobs?.map((job: object, index: React.Key | null|undefined) => {return <Card job={ job } key={index}/>})}

        {showMore ? (
          <>
            <div
              onClick={() => setShowMore(!showMore)}
              className="card--techstack show--more"
            >
              <span>Show Less...</span>
            </div>
          </>
        ) : (
          <div
            onClick={() => setShowMore(!showMore)}
            className="card--techstack show--more"
          >
            <span>Show More...</span>
          </div>
        )}
      </section>

      {/* <ProjectSection /> */}
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
