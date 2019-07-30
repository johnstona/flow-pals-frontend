import React from 'react'

const AddCollaboratorList = ({ collaborators }) => {
  return collaborators.map(c => {
    return <h2>{c.name}</h2>
          <button onClick={() => addCollaborator(c)}>Add To Project</button>
  })
}

export default AddCollaboratorList