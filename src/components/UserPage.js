import React from 'react'
import Container from './Container/Container'
import Project from './Project/Project'
import Sidebar from './Sidebar/Sidebar'
import ProjectList from './ProjectList/ProjectList'

const UserPage = ({ projects, displayProject, project, collaborators  }) => {
  return (
    <Container>
      <Sidebar>
        <ProjectList projects={ projects } displayProject={ displayProject }/>
      </Sidebar>
    <Project project={ project } collaborators={ collaborators }/>
    </Container>
  )
}

export default UserPage;
