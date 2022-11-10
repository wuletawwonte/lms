import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import { FaHome } from 'react-icons/fa'
import './Sidemenu.scss'

export default function Sidemenu() {
  return (
    <nav className="sidemenu">
        <NavLink to="/">
            <img src={logo} alt="logo" />
        </NavLink>
        <ul>
            <li>
                <NavLink to="/tutors" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                    <FaHome /><span> Tutors</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Languages</NavLink>
            </li>
            <li>
                <NavLink to="/lessons" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>My Lessons</NavLink>
            </li>
        </ul>
    </nav>
  )
}
