import React, { useState } from 'react';
import LUS_AddUser from './LUS_AddUser';
import LUS_DisplayUser from './LUS_DisplayUser';
import './LUS.css';

const LiftUpState = () => {
  const [user, setUser] = useState('');
  return (
    <div className="liftup-container">
      <h2 className="section-heading">Add User</h2>
      <LUS_AddUser setUser={setUser} />
      <LUS_DisplayUser user={user} />
    </div>
  );
};

export default LiftUpState;
