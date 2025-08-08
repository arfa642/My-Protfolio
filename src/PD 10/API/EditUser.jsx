import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import './API_INTEGRATION.css';

const EditUser = () => {
  return (
    <div style={{ textAlign: 'center', marginBottom: "100px" }} >
      <br /><br />
      <h1>Edit Details</h1>
      <br /><br />
      <input className='TB' type="text" placeholder='Enter Name' />      <br /> <br />
      <input className='TB' type="text" placeholder='Enter Age' /> <br /> <br />
      <input className='TB' type="email" placeholder='Enter Email' /> <br /> <br />
      <input className='TB' type="password" placeholder='Enter Password' /> <br /> <br />

      <Button >Save</Button>
    </div >
  )
}

export default EditUser
