import React from 'react'


const UOSchangeState = ({data,setData,handleName,handleAge,handleCity,handleCountry}) => {
  return (
    <div>
      <input type="text" placeholder='update Name'  onChange={(event) => handleName(event.target.value)} />
      <input type="text" placeholder='update Age'     onChange={(event) => handleAge(event.target.value)} />
      <input type="text" placeholder='update City'    onChange={(event) => handleCity(event.target.value)}  />
      <input type="text" placeholder='update Country' onChange={(event) => handleCountry(event.target.value)}  /> 
      <hr />
    </div>
  )
}

export default UOSchangeState
