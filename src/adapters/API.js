import ActionCable from 'actioncable'

const ACTION_CABLE = ActionCable.createConsumer('ws://localhost:3000/cable')
const BASE_URL = 'http://localhost:3000'
const USERS_URL = `${BASE_URL}/users`
const PROJECTS_URL = `${BASE_URL}/projects`
const COLLABORATORS_URL = `${BASE_URL}/collaborators`
const LOGIN_URL = `${BASE_URL}/login`

const fetchOpts = (token) => {
  return {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  }
}

const createSubscription = () => {
  ACTION_CABLE.subscriptions.create('ProjectChannel', {
    received: data => {
      console.log(data)
    }
  })
}

const getAllProjects = token => {
  return fetch(PROJECTS_URL, fetchOpts(token))
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
      }
    })
  }).then(res => res.json())
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

const createProject = (token) => {
  return fetch(PROJECTS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      project: {
        name: '',
        content: ''
      }
    })
  }).then(resp => resp.json())
}

const updateProject = (token, id, name, content) => {
  return fetch(`${PROJECTS_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      project: {
        id: id,
        name: name,
        content: content
      }
    })
  }).then(res => res.json())
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
  getAllProjects,
  createProject,
  updateProject,
  createUser,
  login,
  createSubscription
}
