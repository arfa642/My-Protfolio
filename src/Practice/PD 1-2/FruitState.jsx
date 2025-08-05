import React, { useState } from 'react';

const Fruit = () => {
  const [fruit, setFruit] = useState("images/strawberry.png");

  const changeFruit = () => {
    if (fruit === 'images/strawberry.png') {
      setFruit('images/mango.png');
    } else if (fruit === 'images/mango.png') {
      setFruit('images/apple.png');
    } else if (fruit === 'images/apple.png') {
      setFruit('images/banana.png');
    } else if (fruit === 'images/banana.png') {
      setFruit('images/strawberry.png');
    }
  };

  return (
    <div>
      <p><img src={fruit} alt="fruit" /></p>
      <button onClick={changeFruit}>Change fruit</button>
    </div>
  );
};

export default Fruit;
