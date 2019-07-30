import React from 'react'
import UserPage from './UserPage'
import Login from './Login'

// need to render login if localstorge token is not there
// need to render project page if localstorge token is there

const token = localStorage.getItem('token')

const Home = ({ login , projects, collaborators }) => {
  return (
    token
    ? <UserPage projects={ projects }/>
    : <Login login={ login }/>
  )
}

export default Home;
