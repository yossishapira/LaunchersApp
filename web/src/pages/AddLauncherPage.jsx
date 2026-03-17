import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'; 
import { createLaunchers } from '../api/client';

export default function AddLauncherPage() {
  const navigate = useNavigate()
  const [name,setName] = useState('');
  const [citi,setCiti] = useState('');
  const [rocketType,setRocketType] = useState('');
  const [latitude,setLatitude] = useState('');
  const [longitude,setLongitude] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault()
    const payload = {
      name,
      citi,
      rocketType,
      latitude,
      longitude
    }
    createLaunchers('launchers',payload)
    .then((data)=>{
      navigate('/')
    })
  }

  return (
    <div>
      <h1>Add New Launcher</h1>
      <form className="" onSubmit={handleSubmit}>
        <div>
          <label>name</label><br/>
          <input type="text" onChange={e=> setName(e.target.value)}/>
        </div>
        <div>
          <label>citi</label><br/>
          <input type="text" onChange={e=> setCiti(e.target.value)}/>
        </div>
        <div>
          <label>rocketType</label><br/>
          <input type="text" onChange={e=> setRocketType(e.target.value)}/>
        </div>
        <div>
          <label>latitude</label><br/>
          <input type="number" onChange={e=> setLatitude(e.target.value)}/>
        </div>
        <div>
          <label>longitude</label><br/>
          <input type="number" onChange={e=> setLongitude(e.target.value)}/>
        </div>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}
