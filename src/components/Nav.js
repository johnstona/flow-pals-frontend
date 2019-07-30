import React from 'react';
import { BrowserRouter, Route, NavLink } from "react-router-dom";

const Nav = () => {
  return (
  <nav className="nav" role="navigation">
    <ul className="nav-list">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/signup">Signup</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
    </ul>
  </nav>
  )
}

export default Nav
