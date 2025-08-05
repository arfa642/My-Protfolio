import React from 'react'
import { useState } from 'react'
import UOSchangeState from './UOSchangeState'
import styles from './UOS.module.css';


const UpdateObjInState = () => {
  const [data, setData] = useState({
    name: 'arfa',
    age: 19,
    address: {
      city: 'Lahore',
      country: 'Pakistan'
    }
  })
  const handleName = (name) => {
    const updatedData = { ...data };
    updatedData.name = name;
    setData(updatedData);
  };
  const handleAge = (age) => {
    const updatedData = { ...data };
    updatedData.age = age;
    setData(updatedData);
  };
  const handleCity = (city) => {
    const updatedData = { ...data };
    updatedData.address.city = city;
    setData(updatedData);
  };
  const handleCountry = (country) => {
    const updatedData = { ...data };
    updatedData.address.country = country;
    setData(updatedData);
  };
  return (
    <div>
      <UOSchangeState data={data} setData={setData} handleName={handleName} handleAge={handleAge} handleCity={handleCity} handleCountry={handleCountry} />
      <h2>🌸 User Data</h2>
      <p>💖 Name: {data.name}</p>
      <p>🎂 Age: {data.age}</p>
      <p>🏡 City: {data.address.city}</p>
      <p>🌍 Country: {data.address.country}</p>
    </div>
  )
}

export default UpdateObjInState
