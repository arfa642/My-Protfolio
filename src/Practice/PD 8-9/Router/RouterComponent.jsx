import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import TP from './TP';
import NotFound from './NotFound';
import College from './College';
import Alumni from './Alumni';
import Faculty from './Faculty';
import Facilities from './Facilities';
import LinksComponent from './LinksComponent';
import Users from './Users';
import UserPage from './UserPage';

const RouterComponent = () => {
  return (
    <Routes>
   
      <Route path="/" element={<Navigate to="/user" replace />} />


      <Route path="/user" element={<LinksComponent />}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
       <Route path="users/List?" element={<Users />} /> 
        <Route path="TP" element={<TP />} />
        <Route path="/user/:id/:name/:address?" element={<UserPage />} />
        
        
      </Route>


      <Route path="/user/college" element={<College />}>
        <Route index element={<Alumni />} />
        <Route path="Alumni" element={<Alumni />} />
        <Route path="Faculty" element={<Faculty />} />
        <Route path="Facilities" element={<Facilities />} />
      </Route>

      {/* 404 fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouterComponent;
