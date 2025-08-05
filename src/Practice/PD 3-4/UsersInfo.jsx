import React from 'react'

const UsersInfo = ({ item }) => {
  return (
    <div>
      <p>id: <span style={{color:"green"}} > {item.Id}</span></p>
      <p>Name: {item.Name}</p>
      <p>Email: {item.Email}</p>
      <p>Proffesion: {item.Proffesion}</p>

    </div>

  )
}

export default UsersInfo