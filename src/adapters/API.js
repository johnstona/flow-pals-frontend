import ActionCable from 'actioncable'

const ACTION_CABLE = ActionCable.createConsumer('ws://localhost:3000/cable')
const BASE_URL = 'http://localhost:3000'
const USERS_URL = `${BASE_URL}/users`
const PROJECTS_URL = `${BASE_URL}/projects`
const COLLABORATORS_URL = `${BASE_URL}/collaborators`
const LOGIN_URL = `${BASE_URL}/login`

const createSubscription = () => {
  ACTION_CABLE.subscriptions.create('ProjectChannel', {
    received: data => { console.log(data) }
  })
}

const getAllProjects = () => {
  return fetch(PROJECTS_URL)
    .then(resp => resp.json())
}

const login = (user) => {
  return fetch(LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: user.username,
        password: user.password
      } })
  })
}

export const getAllUsers = () => {
  return fetch(USERS_URL)
    .then(resp => resp.json())
}

const getAllCollaborators = () => {
  return fetch(COLLABORATORS_URL)
    .then(resp => resp.json())
}

export const createUser = (user) => {
  return fetch(USERS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        name: user.name,
        username: user.username,
        password: user.password
      }
    })
  }).then(resp => resp.json())
}

const createProject = (project) => {
  return fetch(USERS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(project)
  }).then(resp => resp.json())
}

const createCollaborator = (user_id, project_id) => {
  return fetch(USERS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user_id: user_id,
      project_id: project_id
    })
  }).then(resp => resp.json())
}

export default {
  getAllUsers,
  createUser,
  login,
  createSubscription
}
