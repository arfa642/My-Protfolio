import React, { useEffect, useState } from 'react'

const UFFP = ({ count, data, setCount, setData }) => {

  useEffect(() => {
     console.log('mount phase');
  }, [])

    useEffect(() => {
     console.log('update phase');
  }, [count])

      useEffect(() => {
     return () => {
      console.log('unmount phase');
     }
  }, [])



  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count} </button>
      <button onClick={() => setData(data + 1)}>
        data: {data} </button>

    </div>
  )
}

export default UFFP