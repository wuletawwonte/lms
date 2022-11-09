import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'

export default function Sidemenu() {
  return (
    <nav>
        <NavLink to="/">
            <img src={logo} alt="logo" />
        </NavLink>
        <ul>
            <li>
                <NavLink to="/tutors">Tutors</NavLink>
            </li>
            <li>
                <NavLink to="/">Languages</NavLink>
            </li>
            <li>
                <NavLink to="/lessons">My Lessons</NavLink>
            </li>
        </ul>
    </nav>
  )
}
