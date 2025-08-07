import React, { useEffect, useState } from 'react';
import './API_INTEGRATION.css';



const API_INTEGRATION = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('Loading ');

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus('Fetching Data ');
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setLoading(true);
    getUserData();
  }, []);

  const getUserData = async () => {
    const url = 'http://localhost:3000/users';
    let response = await fetch(url);
    response = await response.json();
    console.log('Full API Response:', response);
    setData(response);
    setLoading(false);
  };

  useEffect(() => {
    console.log('Fetched Users:', data);
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      {
        !loading ?
          data.map((user) => (
            <div key={user.id}>
              <ul>
                <li data-label="Name">{user.name}</li>
                <li data-label="Age">{user.age}</li>
                <li data-label="Email">{user.email}</li>
                <li data-label="Password">{user.password}</li>
              </ul>

            </div>
          )) :
          <h5 style={{ fontSize: "40px" }}> {status} <span style={{ fontSize: "50px" }}>   &#9676; </span> </h5>


      }

    </div>
  );
};

export default API_INTEGRATION;
