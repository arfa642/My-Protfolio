import React from 'react';
import useToggle from './useToggle';
import Button from 'react-bootstrap/Button';

const NewHookUTused = () => {
  const [value, togglevalue] = useToggle(true);

  return (
    <div>
      <Button style={{ marginRight: '10px' }} onClick={togglevalue}>
        Toggle heading
      </Button>
      <Button style={{ marginRight: '10px' }} onClick={() => togglevalue(false)}>
        Hide heading
      </Button>
      <Button style={{ marginRight: '10px' }} onClick={() => togglevalue(true)}>
        Show heading
      </Button>
      <br /><br />
      {value ? <h2>This is heading</h2> : null}
    </div>
  );
};

export default NewHookUTused;
