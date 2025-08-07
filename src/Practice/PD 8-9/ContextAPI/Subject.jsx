import React, { useContext } from 'react'
import { subjectContext } from './ContextData'

const Subject = () => {
  let subject = useContext(subjectContext)
  return (
    <div style={{backgroundColor:'skyblue', padding: '10px'}} >
      <h3>subject is {subject}</h3>
    </div>
  )
}

export default Subject
