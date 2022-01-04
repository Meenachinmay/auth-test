import React from 'react'
import Navbar from './core/Navbar';

import { Routes, Route } from 'react-router-dom'

import Profile from './core/Profile';
import Login from './core/Login';
import Register from './core/Register';
import Home from './core/Home'
const App = () => {
  return (
    <div className="">
      <>
      <Navbar />
      </>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/login" element={ <Login /> } />
      </Routes>
    </div>
  )
}
export default App;
