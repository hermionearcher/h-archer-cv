import React from 'react'
import { useParams, Link } from 'react-router-dom'
import ProjectData from '../data/projects.json'

const Project = ({ }) => {
  const params: any = useParams();
  const project = ProjectData[params.id - 1]

  return (
    <body>
      <div id="container--main">
        <Link to="/">&#x2190; Go Back</Link>

        <h1>{project.title}</h1>

        <ul>
          {/* <li><a href={project.demoLink} target="_blank" rel="noreferrer">Live Demo</a></li> */}
          <li><Link to={project.demoLink} target="_blank" rel="noreferrer">Live Demo</Link></li>
          <li><Link to={project.codeLink} target="_blank" rel="noreferrer">Source code</Link></li>
        </ul>
        <p>{project.paragraph1}</p>

        <p>{project.paragraph2}</p>

        {/* <ul>
              <li>Contrary to popular belief, Lorem Ipsum is not simply random text</li>
              <li>making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia</li>
              <li>45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem"</li>
            </ul> */}

        <div className="line-break"></div>


        <section className="section--page">

          <div id="socials--list">
            {/* <a href={`/project/${project.id - 1}`} className={project.id - 1 <= 0 ? 'disabled' : ''}>Previous</a>
            <a href={`/project/${project.id + 1}`} className={project.id + 1 > ProjectData.length ? 'disabled' : ''}>Next</a> */}
            <Link to={`/project/${project.id - 1}`} className={project.id - 1 <= 0 ? 'disabled' : ''}>Previous</Link>
            <Link to={`/project/${project.id + 1}`} className={project.id + 1 > ProjectData.length ? 'disabled' : ''}>Next</Link>
          </div>
        </section>

      </div>
    </body>
  )
}

export default Project