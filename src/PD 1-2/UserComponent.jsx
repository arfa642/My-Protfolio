import React from 'react'

const Login = () => {
  const userName = 'arfa';
  return (
    <div>
    <p>  Login {userName} </p> 
    <button onClick={() => {alert('hello')}} >click</button> 
    </div>
    
  )
}

export default Login