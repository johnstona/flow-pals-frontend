import React from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import API from './adapters/API'
import Signup from './components/Signup'
import Login from './components/Login'

class App extends React.Component {
  
  componentDidMount () {

    API.createSubscription()
  }

  newUser = (user) => {
    API.createUser(user)
    .then(console.log)
  }

  loginUser = (user) => {
    API.login(user)
    .then(console.log)
  }

  render () {
    return (
      <div className='App'>
        <BrowserRouter>
          <Header />
          <Signup newUser={this.newUser}/>
          <Login login={this.loginUser}/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
