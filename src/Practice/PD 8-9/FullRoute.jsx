import {Routes, Link, Route } from "react-router";

import React from 'react'

const RoutePractice = () => {
  return (
    <div>

      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='info'>info</Link>

        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>about</h1>} />
          <Route path="/info" element={<h1>info</h1>} />
        </Routes>

   </div>
  )
}

export default RoutePractice