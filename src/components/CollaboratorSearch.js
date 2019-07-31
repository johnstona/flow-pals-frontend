import React, { useState } from 'react'
import AddCollaboratorList from './AddCollaboratorList'
import './CollaboratorSearch.css'

const CollaboratorSearch = ({collaborators, addCollaboratorToProject, users}) => {

  const [searchValue, updateSearchValue] = useState('')
  const [allUsers, setUsers] = useState([])

  const search = () => {
    let usersToRender = users.filter(c => c.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
    setUsers(usersToRender);
  }

  return (
    <div clasName="collaborators-container">
      <input className="border-b-2 border-pink-500 p-1" type='text' onChange={e => updateSearchValue(e.target.value)} value={searchValue} />
      <button className="border-2 m-2 border-blue-500 p-1 rounded text-blue-500" onClick={() => search()}>Search!</button>

      <div className="collaborators-display">
        { allUsers.map(u => <div className="cursor-pointer">{u.name}</div>) }
      </div>

      <div className="all-users-display">
      </div>
    </div>
  )

}

export default CollaboratorSearch
