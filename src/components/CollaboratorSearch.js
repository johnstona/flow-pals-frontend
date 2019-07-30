import React, { useState } from 'react'
import AddCollaboratorList from './AddCollaboratorList'

const CollaboratorSearch = ({collaborators, addCollaboratorToProject}) => {

  const [searchValue, updateSearchValue] = useState('')

  const search = (value) => {
    let collaboratorsToRender = collaborators.filter(c => c.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
    return <AddCollaboratorList collaborators={collaboratorsToRender} addCollaborator={addCollaboratorToProject} />
  }

  return <div>
    <input type='text' onChange={e => updateSearchValue(e.target.value)} value={searchValue} />
    <button onClick={() => search(searchValue)}>Search!</button>
  </div>

}

export default CollaboratorSearch