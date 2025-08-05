import React, { useState } from 'react'
import Info from './practice day 3/info'

const Form = () => {
  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')
  function clear () {
    setName('')
    setPassword('')
    setEmail('')
    
  }
  return (
    <div>
      <h1>Please enter yout Information :) </h1>
      <input type="text" placeholder='Enter Name' value= {name} onChange={(event) => {setName(event.target.value)}} />
      <br/>  <br/> 
      <input type="password" placeholder='Enter Password' value= {password} onChange={(event) => {setPassword(event.target.value)}} />
       <br/>  <br/> 
      <input type="text" placeholder='Enter Email' value= {email} onChange={(event) => {setEmail(event.target.value)}} />
       <br/>  <br/> 
       <Info />

      <button onClick={clear}> Submit </button>
       <br/>  <br/> 
      <p>{name}</p>
      <p>{password}</p>
      <p>{email}</p>

      
    </div>
  )
}

export default Form