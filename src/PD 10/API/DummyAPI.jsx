import React, { useEffect, useState } from 'react'

const DummyAPI = () => {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    newUserData()
  }, [])


  async function newUserData() {
    let response = await fetch('https://dummyjson.com/users')
    response = await response.json()
    setUserData(response.users)

  }
  console.log(userData)
  return (
    <div>
      <p className="text-[60px]">Users</p>

      {
        userData && userData.map((user) => (
          <div key={user.id}>
            <h5>First Name:{user.firstName}</h5>
            <p> username: {user.password}</p>
            <p> password:{user.bank.iban}</p>
            <img src={user.image} alt="" /> 
    
           


          </div>
        ))
      }
    </div>
  )
}

export default DummyAPI
