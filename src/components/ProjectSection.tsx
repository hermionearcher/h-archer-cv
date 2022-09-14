import React from 'react'
import ProjectData from '../data/projects.json'

const ProjectSection = () => {
    return (
        <section className="section--page" id="my-work">
            <h2>Projects & Accomplishments</h2>


            {ProjectData.map((project, key) => {
                return (
                    <div className="card--project" key={key} >
                        <a href={`/project/${project.id}`}><span>🏆 </span>{project.title}</a>
                    </div>
                )
            })}
        </section>

    )
}

export default ProjectSection