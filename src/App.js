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
    projectsData: [],
    currentProject: {}
  }

  componentDidMount () {
    API.createSubscription()
    const token = localStorage.getItem('token')
    if (token) this.setState({ token: token});

    if (token)
      API.getAllProjects(token)
        .then(projectsData => this.setState({
          projects: projectsData.projects,
          collaborators: projectsData.collaborators
        }));
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

  displayProject = id => {
    let currentProject = this.state.projects.find(project => project.id === id)
    this.setState({ currentProject })
  }

  updateSingleProject = (newProject, name, content) => {
    let newProjectArray = this.state.projects
    let index = this.state.projects.findIndex(project => project.id === newProject.id)
    newProject.name = name
    newProject.content = content
    newProjectArray[index] = newProject
    this.setState({
      projects: newProjectArray
    })
  }

  newProject = () => {
    let token = this.state.token
    API.createProject(token)
      .then(currentProject => { API.getAllProjects(token)
        .then(projectsData => this.setState({ currentProject, projectsData }))
        }
      )

  }

  saveProject = (id, name, content) => {
    // params => token, id, name, content
    API.updateProject(this.state.token, id, name, content)
      .then(currentProject => this.setState({ currentProject }))
  }

  token = localStorage.getItem('token')

  render () {
    const { token, projects, collaborators, currentProject } = this.state

    return (
      <div className='App'>
        <Router>
          <Nav />
          <Route exact path="/" render={ () =>
              <Home
                login={ this.loginUser }
                displayProject={ this.displayProject }
                project={ currentProject }
                projects={ projects }
                collaborators={ collaborators }
                newProject={ this.newProject }
                saveProject={ this.saveProject }
                updateSingleProject={this.updateSingleProject}
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
