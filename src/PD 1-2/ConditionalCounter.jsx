import React, { useState } from 'react';

const ConditionalCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      {
        count === 1 ? <p>Condition 1</p> :
        count === 2 ? <p>Condition 2</p> :
        count === 3 ? <p>Condition 3</p> :
        count === 4 ? <p>Condition 4</p> :
        count === 5 ? <p>Condition 5</p> :
        count === 6 ? <p>Condition 6</p> :
        count === 7 ? <p>Condition 7</p> :
        count === 8 ? <p>Condition 8</p> :
        count === 9 ? <p>Condition 9</p> :
        count === 10 ? <p>Condition 10</p> :
        count === 11 ? <p>Condition 11</p> :
        count === 12 ? <p>Condition 12</p> :
        count === 13 ? <p>Condition 13</p> :
        count === 14 ? <p>Condition 14</p> :
        count === 15 ? <p>Condition 15</p> :
        count === 16 ? <p>Condition 16</p> :
        count === 17 ? <p>Condition 17</p> :
        count === 18 ? <p>Condition 18</p> :
        count === 19 ? <p>Condition 19</p> :
        count === 20 ? <p>Condition 20</p> :
        null
      }
    </div>
  );
};

export default ConditionalCounter;
