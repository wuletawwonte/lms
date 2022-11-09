import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Languages from '../pages/Languages'
import NoMatch from '../pages/NoMatch'
import Tutors from '../pages/Tutors'
import Sidemenu from './Sidemenu'

export default function Layout() {
  return (
    <>
        <Sidemenu />
        <Routes>
            <Route element={<Tutors />} path="/tutors" exact />
            <Route element={<Languages />} path="/"/>
            <Route element={<NoMatch />} path="/*" />
        </Routes>
    </>
  )
}
