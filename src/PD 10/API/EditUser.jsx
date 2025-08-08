import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import './API_INTEGRATION.css';
import { useParams } from 'react-router';

const EditUser = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { id } = useParams();

  useEffect(() => {
    getResponse();
  }, [])

  const getResponse = async () => {
    const url = "http://localhost:3000/users" + "/" + id;
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setName(response.name)
    setAge(response.age)
    setEmail(response.email)
    setPassword(response.password)
  }

  return (
    <div style={{ textAlign: 'center', marginBottom: "100px" }} >
      <br /><br />
      <h1>Edit Details</h1>
      <br /><br />
      <input  value={name} className='TB' type="text" placeholder='Enter Name' />      <br /> <br />
      <input  value={age} className='TB' type="text" placeholder='Enter Age' /> <br /> <br />
      <input  value={email} className='TB' type="email" placeholder='Enter Email' /> <br /> <br />
      <input  value={password} className='TB' type="password" placeholder='Enter Password' /> <br /> <br />

      <Button >Save</Button>
    </div >
  )
}

export default EditUser
