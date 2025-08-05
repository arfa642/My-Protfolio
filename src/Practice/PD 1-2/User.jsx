import React from 'react'

const User = ({id = 'userId' ,name = 'userName' ,age = 'userAge',profession = 'userProfession'}) => {
  return (
    <div>
      
        <h2>Id: {id}</h2>
        <h2>Name: {name}</h2>
        <h2>Age: {age}</h2>
        <h2>Profession: {profession}</h2>
        <hr />
    </div>
  )
}

export default User