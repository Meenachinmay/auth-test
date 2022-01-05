import React from 'react'
import Navbar from './core/Navbar';

import { Routes, Route } from 'react-router-dom'

import Profile from './core/Profile';
import Login from './core/Login';
import Register from './core/Register';
import Home from './core/Home'
import Activation from './core/Activation';

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
        <Route path="/auth/activate/:token" element={<Activation />}/>
      </Routes>
    </div>
  )
}
export default App;
