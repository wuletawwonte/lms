import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Languages from '../pages/Languages';
import NoMatch from '../pages/NoMatch';
import Tutors from '../pages/Tutors';
import Sidemenu from './Sidemenu';
import './Layout.scss';
import Header from './Header';

export default function Layout() {
  const [active, setActive] = useState(true);

  function handleClick() {
    setActive(!active);
  }

  return (
    <div className="container">
      {active && (
        <div className="container__sidemenu">
          <Sidemenu />
        </div>
      )}
      <main>
        <button type="button" onClick={handleClick} className="toggle-sidemenu">
          <FaBars />
        </button>
        <Header />
        <Routes>
          <Route element={<Tutors />} path="/lms/tutors" exact />
          <Route element={<Languages />} path="/lms/" />
          <Route element={<NoMatch />} path="/lms/*" />
        </Routes>
      </main>
    </div>
  );
}
