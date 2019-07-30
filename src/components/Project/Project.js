import React from 'react'
import './Project.css'

const Project = ({ project }) => {
  return (
    <div className="project-wrapper">
      <h1>{ project.name }</h1>
      <div class="project">
        { project.content }
      </div>
    </div>
  )
}

export default Project
