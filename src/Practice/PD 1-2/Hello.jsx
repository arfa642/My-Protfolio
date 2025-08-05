import React from 'react'

const Hello = ({children,color='green'}) => {
  return (
    <div style={{color: color, border: '2px solid orange', padding: '5px', width: '300px'}}>  

      {children}
      
    </div>
  )
}

export default Hello