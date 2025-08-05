import React, { useState } from 'react'

const UpdatingObjectArray = () => {
  const [data, setData] = useState([
    { name: 'arfa', age: '19' },
    { name: 'abdul', age: '18' },
    { name: 'aniq', age: '17' }
])

  const handleLastName = (name) => {
    data[data.length-1].name = name;
    setData([...data])
  }
  const handleLastAge = (age) => {
    data[data.length-1].age = age;
    setData([...data])
  }

  return (
    <div>
      <h3>Updating Array</h3>
      <br />
      <input type="text" placeholder='Enter last name' onChange={(e) => handleLastName(e.target.value)} />
      <br/><br/>
      <input type="text" placeholder='Enter last person age' onChange={(e) => handleLastAge(e.target.value)} />
      <br /> <br />
      {
        data.map((info, index) => (
          <div key={index}>
            <h5 >{info.name}</h5>
            <h5>{info.age}</h5>
          </div>
        ))
      }


    </div>
  )
}

export default UpdatingObjectArray
