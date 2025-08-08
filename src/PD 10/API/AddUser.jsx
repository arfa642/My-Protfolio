import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import './API_INTEGRATION.css';

const AddUser = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const data = async () => {
    console.log(name, age, email, password)
    const url = 'http://localhost:3000/users';
    let response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ name, age, email, password })
    });
    response = await response.json();
    if (response) {
      alert('new user added')
    }
    console.log(response);
  }
  return (
    <div style={{ textAlign: 'center', marginBottom: "100px" }} >
      <br /><br />
      <h1>Add new User</h1>
      <br /><br />
      <input className='TB' type="text" placeholder='Enter Name' onChange={(event) => setName(event.target.value)} />      <br /> <br />
      <input className='TB' type="text" placeholder='Enter Age' onChange={(event) => setAge(event.target.value)} /> <br /> <br />
      <input className='TB' type="email" placeholder='Enter Email' onChange={(event) => setEmail(event.target.value)} /> <br /> <br />
      <input className='TB' type="password" placeholder='Enter Password' onChange={(event) => setPassword(event.target.value)} /> <br /> <br />

      <Button onClick={data} >Submit</Button>
    </div >
  )
}

export default AddUser
