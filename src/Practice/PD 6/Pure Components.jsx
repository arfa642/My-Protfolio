import React from 'react'

//let Parrots = 0;
const PureComponents = () => {
  return (
    <div>
      <ParrotCount Parrots={1}/>
      <ParrotCount Parrots={3}/>
      <ParrotCount Parrots={5}/>
      <ParrotCount Parrots={7}/>

    </div>
  )
}

export default PureComponents

const ParrotCount = ({Parrots}) => {
 // Parrots += 1;
  return(
    <h1>The number of Parrots are {Parrots}</h1>
  )
}
