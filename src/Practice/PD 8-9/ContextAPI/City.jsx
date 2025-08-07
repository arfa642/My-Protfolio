import React, { useState } from 'react'
import College from '../PD 8/College'
import { subjectContext } from './ContextData'


const City = () => {
  const [subject,setSubject] = useState('persian');
  return (
    <div style={{ backgroundColor: 'pink', padding: '10px' }} >
      <h3>ContextAPI</h3>
      <subjectContext.Provider value={subject}>
        <select onChange={(event)=> setSubject(event.target.value)} >
          <option value="">--Select Subject--</option>
          <option value="English">English</option>
          <option value="Urdu">Urdu</option>
          <option value="Maths">Maths</option>
          <option value="Science">Science</option>
          <option value="ComputerScience">ComputerScience</option>
        </select>
             <br /> <br />
      <College />
      </subjectContext.Provider>
 

    </div>

  )
}

export default City
