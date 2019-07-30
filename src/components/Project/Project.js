import React from 'react'
import './Project.css'

const Project = ({ children }) => {
  return (
    <div className="project-wrapper">
      <div class="project">
        { children }
      </div>
    </div>
  )
}

export default Project
