import React from 'react'
import { AddLauncherPage } from './pages/AddLauncherPage'
import { Route, Router } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Router>
        <Route path="/launchers" element={<AddLauncherPage />}></Route>
      </Router>
    </>
  )
}
