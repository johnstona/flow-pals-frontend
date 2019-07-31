import React from 'react';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import './Nav.css';

const token = localStorage.getItem('token')

const links = () => {
  if (token)
    return (
      <>
        <li className="mr-6 text-blue-500"><NavLink to="/">Home</NavLink></li>
        <li className="mr-6 text-blue-500"><NavLink to="/logout">Logout</NavLink></li>
      </>
    )


  if (!token)
    return (
      <>
        <li className="mr-6 text-blue-500"><NavLink to="/">Home</NavLink></li>
        <li className="mr-6 text-blue-500"><NavLink to="/signup">Signup</NavLink></li>
        <li className="mr-6 text-blue-500"><NavLink to="/login">Login</NavLink></li>
      </>
    )
}

const Nav = () => {
  return (
    <nav className="nav h-16" role="navigation">
      <ul className="nav-list flex h-full bg-gray-200 items-center p-4">
        { links() }
      </ul>
    </nav>
  )
}

export default Nav
