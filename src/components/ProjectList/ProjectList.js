import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const ProjectList = ({ projects }) => {
    return (
      <ul className="project-list">
        { projects.map( project =>
            <li className="project-list__item"></li>)
        }
      </ul>
    )
}

export default ProjectList
