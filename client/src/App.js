import React from 'react'
import Navbar from './core/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Profile from './core/Profile';
import Login from './core/Login';

const App = () => {
  return (
    <div className="">
      <>
      <Navbar />
      </>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/login" element={ <Login /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;
