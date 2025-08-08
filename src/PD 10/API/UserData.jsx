import React, { useEffect, useState } from 'react';
import './API_INTEGRATION.css';
import Button from 'react-bootstrap/esm/Button';



const UserData = () => {
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
  const url = 'http://localhost:3000/users';

  const getUserData = async () => {
    let response = await fetch(url);
    response = await response.json();
    console.log('Full API Response:', response);
    setData(response);
    setLoading(false);
  };

  const deleteUser = async(id) => {
    let response = await fetch(url+"/"+ id,{
      method: 'delete'
    });
    response = await response.json();
    alert(`user ${id} data eredicated`);
    getUserData();
  }

  useEffect(() => {
    console.log('Fetched Users:', data);
  }, []);

return (
  <div>
     <br /><br />
    <h1 style={{marginLeft:'170px'}} >Users List</h1>
    {
      !loading ? (
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Actions</th>

            </tr>
          </thead>
          <tbody>
            {data.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td> <Button onClick={() => deleteUser(user.id)} >Delete</Button> </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h5 style={{ fontSize: "40px" }}>
          {status} <span style={{ fontSize: "50px" }}>&#9676;</span>
        </h5>
      )
    }
  </div>
);

  
};

export default UserData;
