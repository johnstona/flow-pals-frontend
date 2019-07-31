import React from 'react'
import Container from './Container/Container'
import Project from './Project/Project'
import Sidebar from './Sidebar/Sidebar'
import ProjectList from './ProjectList/ProjectList'

const UserPage = ({ projects, displayProject, project, collaborators, saveProject, newProject, updateSingleProject  }) => {
  return (
    <Container>
      <Sidebar>
        <ProjectList
          projects={ projects }
          displayProject={ displayProject }
          newProject={ newProject }
        />
      </Sidebar>
    <Project
      project={ project }
      collaborators={ collaborators }
      saveProject={ saveProject }
      updateProject={ updateSingleProject }
    />
    </Container>
  )
}

export default UserPage;
