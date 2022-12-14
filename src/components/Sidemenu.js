import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaCartPlus,
  FaChartArea,
  FaHome,
  FaLanguage,
  FaVideo,
} from 'react-icons/fa';
import logo from '../images/logo.png';
import './Sidemenu.scss';

export default function Sidemenu() {
  return (
    <nav className="sidemenu">
      <NavLink to="/lms/" className="sidemenu__logo">
        <img src={logo} alt="logo" />
      </NavLink>
      <ul>
        <li>
          <NavLink
            to="/lms/tutors"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <FaHome />
            <span>Tutors</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/lms/"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <FaLanguage />
            <span>Explore Languages</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/lms/lessons"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <FaVideo />
            <span>My Lessons</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/lms/statistics"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <FaChartArea />
            <span>Statistics</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/lms/shoppingcart"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <FaCartPlus />
            <span>Shopping Cart</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
