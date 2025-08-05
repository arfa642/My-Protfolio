import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';

const URRADIO = () => {
  const maleRef = useRef(null);
  const femaleRef = useRef(null);

  function genderChanger() {
    if (maleRef.current.checked) {
      femaleRef.current.checked = true;
    } else {
      maleRef.current.checked = true;
    }
  }

  return (
    <Form>
      <Form.Check
        type="radio"
        id="male"
        name="gender"
        label="Male"
        ref={maleRef}
      />
      <Form.Check
        type="radio"
        id="female"
        name="gender"
        label="Female"
        ref={femaleRef}
      />
      <br />
      <Button onClick={genderChanger} variant="success">
        Change Gender
      </Button>
    </Form>
  );
};

export default URRADIO;
