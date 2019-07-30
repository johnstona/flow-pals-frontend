import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './ProjectList.css'

const ProjectList = ({ projects }) => {
    return (
      <ul className="project-list text-center">
        { projects
            ? projects.map( project =>
            <li className="project-list__item shadow bg-teal-200 ls-2 p-2 rounded">{ project.name }</li> )
            : ''

        }
      </ul>
    )
}

export default ProjectList
