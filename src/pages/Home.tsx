import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Contact from '../components/Contact';
import ProjectSection from '../components/ProjectSection';
// import ToggleSwitch from './ToggleSwitch';

const Home = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div id="container--main">

      <section id="wrapper--hero" className="section--page">
        <img id="profile-pic" alt="Profile" src="https://github.com/hermionearcher/react-digital-cv/blob/main/digital-cv/assets/images/h-a-profile-picture.JPG?raw=true" />

        <div>
          <h1 id="user-name">Me...</h1>
          <p id="bio">JavaScript Software Developer <a href="https://www.yorkshirewater.com/" target="_blank" rel="noreferrer">Yorkshire Water</a>, previously at <a href="https://atos.net/en/" target="_blank" rel="noreferrer">Atos</a> as a Angular developer.</p>
          <p id="email">👉<a href="#contact"> Let's talk</a></p>
        </div>
      </section>

      <section className="section--page">

        <div id="socials--list">
          {/* <a href="https://youtube.com/c/dennisivy" target="_blank">Youtube</a> */}
          <a href="#my-work" >My Projects</a>
          <Link to="blog" >Blog Feed</Link>
          <a href="https://www.linkedin.com/in/h-archer/" target="_blank">Linkedin</a>
          <a href="https://github.com/hermionearcher" target="_blank">Github</a>
          <a href="../../assets/h-a-cv-22.pdf" target="_blank">Download my CV</a>
        </div>
      </section>

      <div className="line-break"></div>
      <section className="section--page">
        <h2>Skills & Qualifications</h2>
        <ul id="qualifications--list">
          <li>✔️ 1 Year industry experience as a developer </li>
          <li>✔️ Data and SQL Certification</li>
          <li>✔️ 150 hours+ JavaScript Algorithms and Data Structures course</li>
          <li>✔️ Agile Awareness Level 1 Certification </li>
        </ul>
      </section>

      <section className="section--page">
        <h2>Tech stack</h2>

        <div id="wrapper--techstack__items">
          <div className="card--techstack"><span>React</span></div>
          <div className="card--techstack"><span>Angular</span></div>
          <div className="card--techstack"><span>Node JS</span></div>
          <div className="card--techstack"><span>MySQL</span></div>
        </div>
      </section>

      <section id="work-history-wrapper" className="section--page">
        <h2>Work History</h2>

        <div className="line-break"></div>
        <div className="card--work-history">
          <strong>🚧 JAVASCRIPT SOFTWARE DEVELOPER | <a href="https://www.agora.io/en/" target="_blank" rel="noreferrer"><span id="card--work--company">YORKSHIRE WATER</span></a></strong>
          <p>05/2022 - Present</p>
          <p>Worked on application modernisation and migration to web based solutions.</p>
          <ul>
            <li>Doubled Web SDK's monthly usage minutes from 15 million to 30 million minutes within my first 4 months</li>
            <li>Produced educational video content which resulted in 300k+ views on youtube</li>
            <li>Produced SEO campaigns and content to gain market share for related keywords.</li>
          </ul>
        </div>

        {showMore ?
          <>
            <div className="line-break"></div>
            <div className="card--work-history">
              <strong>🚧 ANGULAR DEVELOPER | <a href="https://www.agora.io/en/" target="_blank" rel="noreferrer"><span id="card--work--company">ATOS</span></a></strong>
              <p>09/21 - 05/22</p>
              <p>Produced content showcasing new tech, tutorials & interviews with top developers.</p>
              <ul>
                <li>166,000+ Youtube Subscribers</li>
                <li>30,000 course copies sold</li>
                <li>12+ Million views on Youtube</li>
                <li>Made regular contributions to Traversy Medias youtube channel (1.9m Subscribers)</li>
                <li>Tutorial videos included projects such as social networks, Ecommerce, real time video, stripe & paypal integrations and more </li>
              </ul>
            </div>

            <div className="line-break"></div>
            <div className="card--work-history">
              <strong>🚧 POWERAPPS DEVELOPER | <a href="https://www.agora.io/en/" target="_blank" rel="noreferrer"><span id="card--work--company">ATOS</span></a></strong>
              <p>09/20 - 09/21</p>
              <p>Designed and developed a laboratory management system. My system
                provided an interface for lab technicians and customers to view and
                track data from samples tested in the lab.</p>
              <ul>
                <li>Designed prototype & pitched original idea for new lab management system (LIMS)</li>
                <li>Built entire code base and brought version 1 of LIMS system to market as a solo developer</li>
                <li>Onboarded and trained customers (Webinars & Conferences)</li>
                <li>Managed a small team of developers in expansion of LIMS system</li>
              </ul>
            </div>
            <div onClick={() => setShowMore(!showMore)} className="card--techstack show--more"><span>Show Less...</span></div>
          </>
          :
          <div onClick={() => setShowMore(!showMore)} className="card--techstack show--more"><span>Show More...</span></div>
        }

      </section>

      <ProjectSection />

      {/* Toggle Switch
      <ToggleSwitch /> */}


      <Contact />
    </div>
  )
}

export default Home