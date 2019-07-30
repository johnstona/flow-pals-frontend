import React, { useState, useEffect } from 'react'
import './Project.css'

const Project = ({ project, collaborators, saveProject }) => {

  const [content, setContent] = useState(project.content)
  const [name, setName] = useState(project.name)

  const handleHeaderChange = e => {
    setName(e.target.value)
  }

  useEffect(() => {saveProject(project.id, name, content)}, [content, name, project.id, saveProject])

  const handleProjectChange = e => {
    setContent(e.target.innerHTML)
  }


  return (
    <div className="project-wrapper">
      <textarea class="h1"
        data-id="h1"
        onChange={handleHeaderChange}
        value={ name }
      />
      <div class="project" data-id="project" onChange={handleProjectChange}>
        { content }
      </div>
    </div>
  )
}

export default Project
