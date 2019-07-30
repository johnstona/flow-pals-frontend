import React from 'react'
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Header = () => {
  return (
    <div className='navbar'>
      <NavLink
        to='/'
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Home</NavLink>
      <NavLink
        to='/login'
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Log In</NavLink>
      <NavLink
        to='/signup'
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Sign Up</NavLink>
    </div>
  )
}

export default Header
