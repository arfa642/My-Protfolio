import React from 'react';

const LUS_DisplayUser = ({ user }) => {
  return (
    <div className="display-wrapper">
      <hr className="divider" />
      <h3 className="display-username">{user}</h3>
    </div>
  );
};

export default LUS_DisplayUser;
