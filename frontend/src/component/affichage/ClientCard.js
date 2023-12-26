import React from 'react'
import { useNavigate } from 'react-router-dom';

const ClientCard = ({users}) => {
  const navigate = useNavigate();
  return (
 <div>
    <button onClick={()=>navigate(`/update/${users._id}`)}>Va faire ton Update</button>
        <h2>{users.name}</h2>
        <p>{users.email}</p>
      </div>
  )
}

export default ClientCard
