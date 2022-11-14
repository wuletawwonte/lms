import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Languages from '../pages/Languages';
import NoMatch from '../pages/NoMatch';
import Tutors from '../pages/Tutors';
import Sidemenu from './Sidemenu';
import './Layout.scss';
import Header from './Header';

export default function Layout() {
  return (
    <div className="container">
      <div className="container__sidemenu">
        <Sidemenu />
      </div>
      <main>
        <button type="button" className="toggle-sidemenu">
          <FaBars />
        </button>
        <Header />
        <Routes>
          <Route element={<Tutors />} path="/tutors" exact />
          <Route element={<Languages />} path="/" />
          <Route element={<NoMatch />} path="/*" />
        </Routes>
      </main>
    </div>
  );
}
