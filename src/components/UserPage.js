import React from 'react'
import Container from './Container/Container'
import Project from './Project/Project'
import Sidebar from './Sidebar/Sidebar'
import ProjectList from './ProjectList/ProjectList'

const UserPage = ({ projects }) => {
  return (
    <Container>
      <Sidebar>
      </Sidebar>
      <Project />
    </Container>
  )
}

export default UserPage;
