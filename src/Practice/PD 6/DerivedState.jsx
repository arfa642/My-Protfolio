import React, { useState } from 'react';
import { containerStyle, inputStyle, buttonStyle, userItemStyle} from './ContainerStyle';


const DerivedState = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');

  const addUser = () => {
    if (user.trim() !== '') {
      setUsers([...users, user.trim()]);
      setUser('');
    }
  };

  const Total = users.length;
  const lastUser = users[users.length - 1];
  const uniqueUsers = [...new Set(users)].length;

  
  return (
    <div style={containerStyle}>
      <h2 style={{ marginBottom: '20px' }}>💎 User Dashboard</h2>
      <h4>Total Users: {Total}</h4>
      <h4>Last User: {lastUser || 'None'}</h4>
      <h4>Unique Users: {uniqueUsers}</h4>
      <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <input
          type="text"
          value={user}
          placeholder="Enter username"
          onChange={(e) => setUser(e.target.value)}
          style={inputStyle}
        />
        <button onClick={addUser} style={buttonStyle}>Add</button>
      </div>
      <div>
        {users.map((item, index) => (
          <div key={index} style={userItemStyle}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DerivedState;
