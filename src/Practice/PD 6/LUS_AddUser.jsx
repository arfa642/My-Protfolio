import React from 'react';

const LUS_AddUser = ({ setUser }) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        className="user-input"
        placeholder="Type username..."
        onChange={(event) => setUser(event.target.value)}
      />
    </div>
  );
};

export default LUS_AddUser;
