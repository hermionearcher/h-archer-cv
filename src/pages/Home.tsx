import React from 'react';
import Card from '../components/Card';
import jobs from "../data/experience.json";
import '../assets/h-a-cv-22.pdf';
import '../assets/Hermione_Archer_React_Developer.pdf';

const Home = () => {
  return (
    <div id="container--main">
      <section id="wrapper--hero top" className="section--page header--block">
        <img
          id="profile-pic"
          alt="Profile"
          src="https://github.com/hermionearcher/h-archer-cv/blob/feature/%23content/src/assets/IMG_1832.jpeg?raw=true"
        />

        <div>
          <h3 id="user-name">Hermione</h3>
          <p id="bio">
            Lead JavaScript software developer{' '}
            <a
              href="https://www.yorkshirewater.com/"
              target="_blank"
              rel="noreferrer"
            >
              Yorkshire Water
            </a>
            , previously a Government contractor as a Angular developer.
          </p>
          <p id="email">
            👉<a href="mailto:hermione-archer@hotmail.co.uk?subject=Wow%20Hermione!%20Your%20cv%20is%20amazing%20-%20need%20a%20job%3F" rel="noreferrer"> Let's talk</a>
          </p>
        </div>
      </section>

      <section className="section--page">
        <div id="socials--list">
          {/* <a href="#my-work">My Projects</a> */}
          <a href="https://www.linkedin.com/in/h-archer/" target="_blank" rel="noreferrer">
            Linkedin
          </a>
          <a href="https://github.com/hermionearcher" target="_blank" rel="noreferrer">
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
          <li>✔️ 2-3 Year industry experience as a developer </li>
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

        {[...jobs]?.reverse().map((job: object, index: React.Key | null|undefined) => {return <Card job={ job } key={index}/>})}
      </section>
    </div>
  );
};

export default Home;
