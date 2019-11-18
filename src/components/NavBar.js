import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavBar.scss'
const NavBar = () => {
  return (
    <nav className="top-navbar">
      <NavLink exact to="/">
        Pokémon Type Advisor
      </NavLink>
      <NavLink exact to="/party-planner">
        Party Planner
      </NavLink>
    </nav>
  )
}

export default NavBar
