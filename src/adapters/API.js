const ACTION_CABLE = ActionCable.createConsumer('ws://localhost:3000')
const BASE_URL = 'https://localhost:3000'
const USERS_URL = `${BASE_URL}/users`
const PROJECTS_URL = `${BASE_URL}/projects`
const COLLABORATORS_URL = `${BASE_URL}/collaborators`

const createSubscription = () => {
  ACTION_CABLE.subscriptions.create('ProjectChannel', {
    received: data => { console.log(data) }
  })
}

const getAllProjects = () => {
  return fetch(PROJECTS_URL)
    .then(resp => resp.json())
}

export const getAllUsers = () => {
  return fetch(USERS_URL)
    .then(resp => resp.json())
}

const getAllCollaborators = () => {
  return fetch(COLLABORATORS_URL)
    .then(resp => resp.json())
}

const createUser = (user) => {
  return fetch(USERS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
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
  getAllUsers
}
