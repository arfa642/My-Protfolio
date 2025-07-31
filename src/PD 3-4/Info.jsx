import React, { useState } from 'react'

const info = () => {
  const [gender,setGender] = useState('Male')
  const [city,setCity] = useState('Islamabad')
  return (
    <div>
      <h3>Selected Gender: {gender}</h3>
      <input type="radio" id='Male' name='Gender' value={'Male'} onChange={(event) => setGender(event.target.value)}
      checked={gender === 'Male'} />
      <label htmlFor="Male">Male</label>
      <input type="radio" id='Female'name='Gender' value={'Female'} onChange={(event) => setGender(event.target.value)}
      checked={gender === 'Female'}/>
      <label htmlFor="Female">Female</label>
      <input type="radio" id='Other' name='Gender' value={'Other'} onChange={(event) => setGender(event.target.value)}
      checked={gender === 'Other'}/>
      <label htmlFor="Other">Other</label>

      <br/><br/><br/>

      <h3>Selected City: {city}</h3>
      <select name="" defaultValue={"Islamabad"} onChange={(event) => setCity(event.target.value)}>
        <option value="Lahore">Lahore</option>
        <option value="Islamabad">Islamabad</option>
        <option value="Karachi">Karachi</option>
        <option value="Queeta">Queeta</option>
        <option value="Peshawar">Peshawar</option>
      </select>
       <br/><br/><br/>
    </div>
  )
}

export default info