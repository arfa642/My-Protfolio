import React, { useState } from 'react'

const UpdatingArray = () => {
  const [names, setNames] = useState(
    ['arfa', 'aniq', 'Abdul'])
  const handleLastName = (name) => {
    names[names.length-1] = name;
    setNames([...names])
  }
  return (
    <div>
      <h3>Updating Array</h3>
      <br/> 
      <input type="text" placeholder='Enter last name' onChange={(e) =>handleLastName(e.target.value) } />
      <br/> <br/>
       {
        names.map((name,index) => (
          <h5>{name}</h5>
        ))
       }
      
      
    </div>
  )
}

export default UpdatingArray
