import React, { useEffect, useState } from 'react'

const USEEFFECT = () => {
  const[count,setCount] = useState(0)
  const[number,setNumber] = useState(0)

  useEffect(() => {
   
  print()
  }, [number])
  

  function print () {
    console.log('called function ')
    console.log(count)
  }


  return (
    <div>
      <button onClick={() => setCount(count+1)} >count {count}</button>
      <button onClick={() => setNumber(number+1)} >number {number}</button>
    </div>
  )
}

export default USEEFFECT