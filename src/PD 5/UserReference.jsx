import React, { useRef } from 'react'

const UserReference = () => {
  const tRef = useRef(null);
  function bf () {
    tRef.current.focus();
    tRef.current.style.color='red'
    tRef.current.placeholder='Please enter password First'
  }
  function hide (){
    if(tRef.current.style.display==='none'){
      tRef.current.style.display='inline'
    }
    else if(tRef.current.style.display!=='none'){
      tRef.current.style.display='none'
    }
  }
  return (
    <div>
      <button onClick={hide} >Toggle</button>
      <input type="text" placeholder='Enter password' ref={tRef} style={{width: '300px'}}/>
      <button onClick={bf} >Submit</button>
      


      
    </div>
  )
}

export default UserReference
