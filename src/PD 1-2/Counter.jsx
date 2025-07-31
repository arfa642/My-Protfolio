import React from 'react'
import { useState } from 'react'

const Counter = () => {
  const [count,setCount] = useState(0);  
  const [count2,setCount2] = useState(10); 
  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={() => setCount(count+1)} >Counter</button>
        <h1>Counter 2:{count2}</h1>
        <button onClick={() => setCount2(count2-1)} > Counter 2</button>
    </div>
    
  )
}

export default Counter