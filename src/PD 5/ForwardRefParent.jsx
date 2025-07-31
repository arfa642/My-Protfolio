import React from 'react'
import ForwardRefChild from './ForwardRefChild'
import Button from 'react-bootstrap/esm/Button'
import { useRef } from 'react'

const ForwardRefParent = () => {
  const reference = useRef(null);
  const updateTb = () => {
    reference.current.focus();
    reference.current.value="Please enter text";
    reference.current.style.color="red";
  }
  return (
    <div>
      <ForwardRefChild ref={reference} />
      <Button onClick={updateTb} style={{marginTop: '10px'}}>Update Input feild </Button>

    </div>
  )
}

export default ForwardRefParent
