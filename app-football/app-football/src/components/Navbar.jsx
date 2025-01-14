import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />
      <ul>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/favorites"><li>Favorites</li></NavLink>
        <NavLink to="/teams"><li>Teams List</li></NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
