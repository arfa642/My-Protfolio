import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

const UserPage = () => {
  const { id, name } = useParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const address = params.get('address'); // Get image URL from query

  return (
    <div>
      <h1>User Detail Page</h1>
      <h2>User id is: {id}</h2>
      <h2>Name: {name}</h2>
      <img src={address} alt={name} width="300" style={{ borderRadius: '10px' }} />

      <Link to="/user/users/List">
        <h3>Back to Users Page</h3>
      </Link>
    </div>
  );
};

export default UserPage;
