import React from 'react'
import './Sidebar.css'

const Sidebar = ({ children }) => {
  return (
    <div className="sidebar flex d-column">
      { children }
    </div>
  )
}

export default Sidebar
