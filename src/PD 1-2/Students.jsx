import React, { useState } from 'react';
import User from './User';
import './Students.css';

const Students = () => {
  const [counter, setCounter] = useState(1);
  const studentList = [
    { id: 1, name: "Aniq", age: 18, profession: "Trader" },
    { id: 2, name: "Arfa", age: 19, profession: "Frontend Developer" },
    { id: 3, name: "Uzair", age: 18, profession: "Web Developer" },
    { id: 4, name: "AbdulRehman", age: 20, profession: "Backend Developer" },
    { id: 5, name: "Umair", age: 20, profession: "UI/UX Designer" },
    { id: 6, name: "Abdullah", age: 19, profession: "Backend Developer" },
    { id: 7, name: "Armaghan", age: 20, profession: "Web Developer" }
  ];

  return (
    <div>
      <h1>Student Details</h1>

      {studentList[counter - 1] && (
        <User
         id={studentList[counter - 1].id}
         name={studentList[counter - 1].name}
         age={studentList[counter - 1].age}
         profession={studentList[counter - 1].profession}
        />
        
      )}
      <User/>
      

      <button className="next-btn" onClick={() => setCounter(counter + 1)}>
        Next
      </button>
    </div>
  );
};

export default Students;
