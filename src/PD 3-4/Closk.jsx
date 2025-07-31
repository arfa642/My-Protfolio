import React, { useState } from 'react';
import Time from './Time';

const Clock = () => {
  const [color, setColor] = useState('white');
  return (
    <div>
      <h3>Select Clock color</h3>
      <select onChange={(event) => setColor(event.target.value)}>
        <option value="white">white</option>
        <option value="yellow">yellow</option>
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="pink">pink</option>
        <option value="orange">orange</option>
        <option value="purple">purple</option>
        <option value="gold">gold</option>
      </select>
      <Time colorPassed={color} />
    </div>
  );
};

export default Clock;