import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className = 'navbar'>
        <h1>Football teams info</h1>
        <ul>
          <NavLink to='/'><li>Home</li></NavLink>
          <NavLink to='/favorites'><li>Favorites</li></NavLink>
        </ul>
  
    </div>
  )
}

export default Navbar