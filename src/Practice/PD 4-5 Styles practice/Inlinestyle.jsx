import React from 'react';
import Me from './Me.jpg';

const Inlinestyle = () => {
  const cardStyle = {
    border: '2px solid black',
    width: '280px',
    textAlign: 'center',
    margin: '10px'
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
  };

  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      <div style={cardStyle}>
        <img src={Me} style={{ width: '100%' }} alt="Me" />
        <div style={contentStyle}>
          <h2>Muhammad Arfa</h2>
          <h2>Frontend Developer</h2>
        </div>
      </div>
      <div style={cardStyle}>
        <img src={Me} style={{ width: '100%' }} alt="Me" />
        <div style={contentStyle}>
          <h2>Muhammad Arfa</h2>
          <h2>Frontend Developer</h2>
        </div>
      </div>
      <div style={cardStyle}>
        <img src={Me} style={{ width: '100%' }} alt="Me" />
        <div style={contentStyle}>
          <h2>Muhammad Arfa</h2>
          <h2>Frontend Developer</h2>
        </div>
      </div>
      <div style={cardStyle}>
        <img src={Me} style={{ width: '100%' }} alt="Me" />
        <div style={contentStyle}>
          <h2>Muhammad Arfa</h2>
          <h2>Frontend Developer</h2>
        </div>
      </div>
      <div style={cardStyle}>
        <img src={Me} style={{ width: '100%' }} alt="Me" />
        <div style={contentStyle}>
          <h2>Muhammad Arfa</h2>
          <h2>Frontend Developer</h2>
        </div>
      </div>
      <div style={cardStyle}>
        <img src={Me} style={{ width: '100%' }} alt="Me" />
        <div style={contentStyle}>
          <h2>Muhammad Arfa</h2>
          <h2>Frontend Developer</h2>
        </div>
      </div>
      <div style={cardStyle}>
        <img src={Me} style={{ width: '100%' }} alt="Me" />
        <div style={contentStyle}>
          <h2>Muhammad Arfa</h2>
          <h2>Frontend Developer</h2>
        </div>
      </div>
      <div style={cardStyle}>
        <img src={Me} style={{ width: '100%' }} alt="Me" />
        <div style={contentStyle}>
          <h2>Muhammad Arfa</h2>
          <h2>Frontend Developer</h2>
        </div>
      </div>
      <div style={cardStyle}>
        <img src={Me} style={{ width: '100%' }} alt="Me" />
        <div style={contentStyle}>
          <h2>Muhammad Arfa</h2>
          <h2>Frontend Developer</h2>
        </div>
      </div>
    </div>
  );
};

export default Inlinestyle;
