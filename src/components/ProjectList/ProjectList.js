import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './ProjectList.css'

const ProjectList = ({ projects, displayProject, collaborators, newProject }) => {
    return (
      <ul className="project-list text-center">
        { projects
            ? projects.map(project =>
              <li
                  className="project-list__item shadow bg-teal-200 ls-2 p-2 rounded mb-4"
                  onClick={ () => displayProject(project) }
                  >
                  { project.name }
              </li>
            )
            : ''
        }
        <li className="project-list__add-btn" onClick={ () => newProject() }>
            <img className="add-btn__img" src={ require('../../img/add_btn.svg') } alt="create new project button"/>
        </li>
      </ul>
    )
}

export default ProjectList
