import React, { useState } from 'react'
import './Project.css'

const Project = ({ project, collaborators, saveProject }) => {

  const [content, setContent] = useState(project.content)
  const [name, setName] = useState(project.name)

  const handleHeaderChange = e => {
    saveProject(project.id, e.target.value, content)
  }

  const handleProjectChange = e => {
    setContent(e.target.innerHTML)
    saveProject(project.id, name, e.target.innerHTML);
  }


  return (
    <div className="project-wrapper">
      <textarea class="h1"
        data-id="h1"
        onChange={handleHeaderChange}
        value={ project.name }
      />
      <div class="project" data-id="project" onChange={handleProjectChange}>
        { project.content }
      </div>
    </div>
  )
}

export default Project
