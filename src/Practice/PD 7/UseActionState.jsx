


//Not avalible in this version


import React, { useActionState } from 'react'


const UseActionState = () => {
    async function handleChange ()  {
    let name = formData.get('name');
    let password = formData.get('password')
    await new Promise((resolve) => { resolve },2000)
    console.log(name,password)
  }
  const [data,action,pending] = useActionState(handleChange,undefined)

  return (
    <div>
      <form action={action}>
        <input type="text" placeholder='Enter name' name='name' />
        <br />  <br />
        <input type="password" placeholder='Enter password' name='password'/>
        <br />  <br />
        <button disabled={pending}>Submit</button>
      </form>
    </div>
  )
}

export default UseActionState
