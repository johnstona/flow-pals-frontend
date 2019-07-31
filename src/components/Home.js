import React from 'react'
import UserPage from './UserPage'
import Login from './Login/Login'

// need to render login if localstorge token is not there
// need to render project page if localstorge token is there

const token = localStorage.getItem('token')

const Home = ({ login, displayProject, projects, collaborators, project, saveProject, newProject, updateSingleProject  }) => {
  return (
    token !== ""
    ? <UserPage
        projects={ projects }
        collaborators={ collaborators }
        displayProject={ displayProject }
        project={ project }
        saveProject={ saveProject }
        newProject={ newProject }
        updateSingleProject={updateSingleProject}
      />
    : <Login login={ login }/>
  )
}

export default Home;
