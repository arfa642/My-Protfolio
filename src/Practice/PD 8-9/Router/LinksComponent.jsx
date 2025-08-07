import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Active.css'; 

const LinksComponent = () => {
  return (
    <div>
      <div style={{
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px'
      }}>
        <NavLink to="/user">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJKtgeX0CRLByXza2Nd7F6Xt-4ttzMTYtU2w&s"
            alt="Logo"
            style={{
              height: '50px',
              margin: '10px 0',
              cursor: 'pointer'
            }}
          />
        </NavLink>

        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '20px',
          alignItems: 'center',
        }}>
          <NavLink
            to='/user'
            end
            className={({ isActive }) => (isActive ? 'activeSection' : '')}
            style={{ textDecoration: 'none', fontWeight: '500', color: 'black' }}
          >
            <h3 style={{ margin: 0 }}>Home</h3>
          </NavLink>

          <NavLink
            to='/user/About'
            className={({ isActive }) => (isActive ? 'activeSection' : '')}
            style={{ textDecoration: 'none', fontWeight: '500', color: 'black' }}
          >
            <h3 style={{ margin: 0 }}>About</h3>
          </NavLink>

          <NavLink
            to='/user/TP'
            className={({ isActive }) => (isActive ? 'activeSection' : '')}
            style={{ textDecoration: 'none', fontWeight: '500', color: 'black' }}
          >
            <h3 style={{ margin: 0 }}>Terms & Policies</h3>
          </NavLink>

          <NavLink
            to='/user/users'
            className={({ isActive }) => (isActive ? 'activeSection' : '')}
            style={{ textDecoration: 'none', fontWeight: '500', color: 'black' }}
          >
            <h3 style={{ margin: 0 }}>Users</h3>
          </NavLink>

          <NavLink
            to='/user/college'
            className={({ isActive }) => (isActive ? 'activeSection' : '')}
            style={{ textDecoration: 'none', fontWeight: '500', color: 'black' }}
          >
            <h3 style={{ margin: 0 }}>College</h3>
          </NavLink>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default LinksComponent;
