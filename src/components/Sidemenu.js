import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidemenu() {
  return (
    <nav>
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
