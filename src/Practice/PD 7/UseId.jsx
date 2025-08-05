import React, { useId } from 'react'

const UseId = () => {
  let id = useId(); 
  return (
    <div>
      <Form id={id} user={1} />
      <Form id={id} user={2} />
      <Form id={id} user={3} />
    </div>
  )
}

export default UseId


const Form = ({id,user}) => {
  return (
    <div>
      <h3>User no. {user}</h3>
      <label htmlFor={id + "name"}>Enter name</label>
      <br/>
      <input type="text" name={id + "name"} />
      <br/><br/>
      <label htmlFor={id + "password"}>Enter password</label>
      <br/>
      <input type="password" name={id + "password"} />
      <br/><br/>
      <label htmlFor={id + "email"}>Enter email</label>
      <br/>
      <input type="email" name={id + "email"} />
      <br/><br/>
      <label htmlFor={id + "Privacy"}>Privacy Policy</label>
      <input type="checkbox" name={id + "Privacy"} />
      <hr />
    </div>
  )
}


