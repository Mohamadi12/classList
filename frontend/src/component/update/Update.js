import React, { useState } from 'react'
import '../affichage/ListClient.css';
import { useNavigate, useParams } from 'react-router-dom';
import { updateContact } from '../../api/api';

const Update = () => {
  let navigate = useNavigate();
  const [name, setName]=useState('')
  const [email, setEmail]=useState('')
  const [age, setAge]=useState('')

  const {id}=useParams()
  const updatedContact=async (id,values)=>{
    await updateContact(id,values)
    navigate('/affichageClient')
  }
  return (
<div className='autre'>
      <section id="contact">
    <div className="title">
      <h2>Contact</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem, ipsum
        dolor.
      </p>
    </div>
    <div className="form">
      <div className="row">
        <input type="text" name="" placeholder=" Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="number" name="" placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)}/>
      </div>
      <div className="row">
        <input type="email" name="" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </div>
 
      <div className="row2">
        <button type="button" onClick={()=>updatedContact(id,{name,age,email})}>Send</button>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Update
