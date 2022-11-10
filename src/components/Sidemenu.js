import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import { FaCartPlus, FaChartArea, FaHome, FaLanguage, FaVideo } from 'react-icons/fa'
import './Sidemenu.scss'

export default function Sidemenu() {
  return (
    <nav className="sidemenu">
        <NavLink to="/" className="sidemenu__logo">
            <img src={logo} alt="logo" />
        </NavLink>
        <ul>
            <li>
                <NavLink to="/tutors" className={({ isActive }) => (isActive ? 'active' : '')}>
                    <FaHome /><span>Tutors</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                    <FaLanguage /><span>Languages</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/lessons" className={({ isActive }) => (isActive ? 'active' : '')}>
                    <FaVideo /><span>My Lessons</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/statistics" className={({ isActive }) => (isActive ? 'active' : '')}>
                    <FaChartArea /><span>Statistics</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/shoppingcart" className={({ isActive }) => (isActive ? 'active' : '')}>
                    <FaCartPlus /><span>Shopping Cart</span>
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}
