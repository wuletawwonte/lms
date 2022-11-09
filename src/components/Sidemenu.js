import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import './Sidemenu.scss'

export default function Sidemenu() {
  return (
    <nav className="sidemenu">
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
