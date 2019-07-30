import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './ProjectList.css'

const ProjectList = ({ projects }) => {
    return (
      <ul className="flex project-list text-center">
        { projects
            ? projects.map( project =>
            <li className="project-list__item ls-2">{ project.name }</li> )
            : ''

        }
      </ul>
    )
}

export default ProjectList
