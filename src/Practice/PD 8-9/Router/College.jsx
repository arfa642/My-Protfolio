import React from 'react';
import { NavLink, Outlet,Link } from 'react-router-dom';
import LinksComponent from './LinksComponent';
import Alumni from './Alumni'

const College = () => {
  return (
    <div>

      <div>
        <div style={{textAlign:'center'}} >
          <h1>Our College</h1>
          
          <div>
            <NavLink to="Alumni" style={{fontSize:"30px", marginLeft:'10px'}}>
              Alumni
            </NavLink>
            
            <NavLink to="Faculty" style={{fontSize:"30px", marginLeft:'10px'}}>
              Faculty
            </NavLink>
            
            <NavLink to="Facilities"  style={{fontSize:"30px", marginLeft:'10px'}}>
              Facilities
            </NavLink>
                  <Outlet />
         

           
          </div>
          <br />
          <Link to="/" ><h3 >Back to Homepage</h3></Link>
        </div>
      </div>
      

    </div>
  );
};

export default College;