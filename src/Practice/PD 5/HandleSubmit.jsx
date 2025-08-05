import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import {useFormState} from 'react-dom'

const HandleSubmit = () => {
  async function submit(e) {
    e.preventDefault();
    await new Promise(res => setTimeout(res, 2000));
    console.log('submit');
  }

  const Fun = () => {
    const {pending} = useFormState();
    console.log(pending);
    return(
    <div>
      <input type="text" placeholder='Enter Name' />
      <br /><br />
      <input type="text" placeholder='Enter password' />
      <br /><br />
      <Button disabled={pending} type="submit">{pending?'submitting...':'Submit'}</Button>
    </div>)
  }

  return (
    <div>
      <form onSubmit={submit}>
      <Fun />
      </form>
    </div>
  );
};

export default HandleSubmit;
