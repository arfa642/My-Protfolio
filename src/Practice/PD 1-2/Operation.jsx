import React from 'react'

const Operation = () => {
    const operator = 'anpum';
    const operatorInfo = {
        age: 19,
        salary: 120000
    }
    const workerAges = [19,25,34]
    function operations(a,b,op){
        let result = 0;
        if(op==='+')
            result = a + b;
        else if (op==='-')
            result = a - b;
        else if (op==='/')
            result = a/b;
        else if (op==='*')
            result = a*b;
        else
            result = 'invalid operator';

        return result;
    }
  return (
    <div>
        <p>Result of operation "3 * 5" is: {operations(3,5,'*')} </p>
        <p>Name: {operator ? operator:'operator not found'}</p>
        <p>Age: {operatorInfo.age}</p>
        <p>Salary: {operatorInfo.salary}</p>
        <p>Age of worker 3:  {workerAges[2]}</p>
    </div>
  )
}

export default Operation