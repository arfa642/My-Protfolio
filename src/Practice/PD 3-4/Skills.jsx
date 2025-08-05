import React, { useState } from 'react'

const Skills = () => {

  const [skills,setSkills] = useState([])
  function handleSkills (event){
    if(event.target.checked){
      setSkills([...skills,event.target.value])
    }
      else {
      setSkills(skills.filter(item => item !== event.target.value));
    }
  }
  return (
    <div>

      <input type="checkbox" value={"C++ "} id='C++' onChange={handleSkills}/>
      <label htmlFor="C++">C++</label>
      <br />  <br />
      <input type="checkbox" value={"Python "} id='Python' onChange={handleSkills} />
      <label htmlFor="Python">Python</label>
      <br />  <br />
      <input type="checkbox" value={"Javascript "} id='Javascript' onChange={handleSkills} />
      <label htmlFor="Javascript">Javascript</label>
      <br />  <br />
      <input type="checkbox" value={"React "} id='React' onChange={handleSkills} />
      <label htmlFor="React">React</label>
      <br />  <br />
      <input type="checkbox" value={"Next js "} id='Next js' onChange={handleSkills} />
      <label htmlFor="Next js">Next js</label>
      <br />  <br />

      <h1>{skills}</h1>
    </div>
  )
}

export default Skills
