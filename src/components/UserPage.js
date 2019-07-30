import React from 'react'
import Container from './Container/Container'
import Project from './Project/Project'
import Sidebar from './Sidebar/Sidebar'
import ProjectList from './ProjectList/ProjectList'

const UserPage = ({ projects, displayProject, project }) => {
  return (
    <Container>
      <Sidebar>
        <ProjectList projects={ projects } displayProject={ displayProject }/>
      </Sidebar>
    <Project project={ project }/>
    </Container>
  )
}

export default UserPage;
