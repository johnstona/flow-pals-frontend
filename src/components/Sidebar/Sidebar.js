import React from 'react'
import './Sidebar.css'

const Sidebar = ({ children }) => {
  return (
    <div className="sidebar flex d-column mr-8">
      { children }
    </div>
  )
}

export default Sidebar
