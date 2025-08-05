import React, { useState } from 'react'

const Input = () => {
  const [value,setValue] = useState('hemlooo g')
  function clear () {
    setValue('')
    tb.event.target.value = '';
  }
  return (
    <div>
      <input className='tb' type="text" placeholder='Enter Text' value= {value} onChange={(event) => {setValue(event.target.value)}} />
      <button onClick={clear}> Clear </button>
      <p>{value}</p>
      
    </div>
  )
}

export default Input