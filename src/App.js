import React from 'react'
import './App.css'
import './index.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import API from './adapters/API'
import Nav from './components/Nav/Nav'
import Home from './components/Home'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'

class App extends React.Component {

  state = {
    token: null,
    projectsData: []
  }

  componentDidMount () {
    API.createSubscription()
    const token = localStorage.getItem('token')
    if (token) this.setState({ token: token});

    if (token)
      API.getAllProjects(token)
        .then(projectsData => this.setState({ projectsData }));
  }

  newUser = (user) => {
    API.createUser(user)
    .then(console.log)
  }

  loginUser = (user) => {
    API.login(user)
      .then(data => {
        const token = localStorage.setItem('token', data.jwt)
        this.setState({
          token: token
        })
      })
  }

  token = localStorage.getItem('token')

  render () {
    const { token, projectsData } = this.state

    return (
      <div className='App'>
        <Router>
          <Nav />
          <Route exact path="/" render={ () =>
              <Home
                login={ this.loginUser }
                projects={ projectsData.projects }
                collaborators={ projectsData.collaborators }
              />
             }
          />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </Router>
      </div>
    )
  }
}

export default App
