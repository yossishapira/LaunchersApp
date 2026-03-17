import React from 'react'
import  AddLauncherPage  from './pages/AddLauncherPage'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />}></Route>
        <Route path="/auth/login" element={<LoginPage />}></Route>
        <Route path="/launchers" element={<AddLauncherPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
