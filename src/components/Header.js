import React from 'react';
import { Link } from 'react-router-dom';
import FlagsDropdown from './FlagsDropdown';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <span>M</span>
      <Link to="/">Welcome</Link>
      <FlagsDropdown />
    </header>
  );
}
