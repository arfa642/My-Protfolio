import React from 'react';

const StudentDisplay = ({ students }) => {
  if (!students) 
    return <p>No students listed.</p>; 

  return (
    <div>
      {students.map((student) => (
        <div key={student.id}>
          <p>id: {student.id}</p>
          <p>name: {student.name}</p>
        </div>
      ))}
    </div>
  );
};

export default StudentDisplay;
