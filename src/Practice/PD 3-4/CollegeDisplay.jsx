import React from 'react'
import StudentDisplay from './StudentDisplay'

const CollegeDisplay = ({college}) => {
  return (
    <div>
      {
        college.map((college, index) => (
          <div key={index} >
            <h2> {college.name}</h2>
            <ul>
              <li>{college.City}</li>
              <br/>
              <li>{college.website}</li>
              <li> 
                <p>Students:</p>
                <StudentDisplay students={college.students}/>
              </li>
            </ul>
          </div>

        ))
      }
    </div>
  )
}

export default CollegeDisplay