import React from 'react'
import { useState } from 'react'

const Toggle = () => {
 const [display,setDisplay] = useState('true')

  return (
    <div>
        <p>Toggle display</p>
        <button onClick={() => setDisplay(!display)} >ON/OFF</button> 
       { display? <p>Arfa</p> : <p>no user name</p> }
      
    </div>
  )
}

export default Toggle 