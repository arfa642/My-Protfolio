import React, { useState } from 'react'
import UFFP from './UFFP';

const POUEFP = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  const [display, setDisplay] = useState(true);

  return (
    <div>
      {
        display ? (
          <>
            <p>Count: {count} & Data: {data}</p>
            <UFFP count={count} setCount={setCount} data={data} setData={setData} />
          </>
        ) : null
      }

      <button onClick={() => setDisplay(!display)}>
        Toggle
      </button>
    </div>
  )
}

export default POUEFP
