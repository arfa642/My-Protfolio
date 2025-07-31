import React, { useState, useEffect } from 'react';

const Time = ({ colorPassed }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p
      style={{
        fontWeight: 'bold',
        color: colorPassed,
        border: '1px solid black',
        padding: '10px',
        backgroundColor: 'black',
        width: '250px',
        borderRadius: '60px',
        textAlign: 'center',
        fontSize: '30px'
      }}
    >
      {time}
    </p>
  );
};

export default Time;