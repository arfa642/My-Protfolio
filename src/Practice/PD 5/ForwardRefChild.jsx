import React, { useRef } from 'react'

const ForwardRefChild = (props) => {
  
  return (
    <div>
      <input type="text" placeholder='enter text' ref={props.ref} />
    </div>
  )
}

export default ForwardRefChild
