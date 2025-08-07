import React from 'react'
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h3 style={{ color: 'red' }}>404 Error</h3>
      <h1>Page Not Found</h1>
      <img
        src="https://t4.ftcdn.net/jpg/03/88/63/83/360_F_388638369_wSBADhKfhiTx6Q5Pz1xfdpy6zotku1Sg.jpg"
        alt=""
      />
      <p>
        <Link to='/'>Back to Homepage</Link>
      </p>
  
    </div>
  );
}

export default NotFound
