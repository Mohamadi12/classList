import axios from 'axios'

export const fetchAllContact=async ()=>{
    const {data}=await axios.get('http://localhost:5000/contact/Allliste')
    return data
}

export const postAllContact=async (values)=>{
    const postelement=await axios.post('http://localhost:5000/contact/Ajoutliste',{...values})
}

export const updateContact=async (id, values)=>{
    const updated=await axios.put(`http://localhost:5000/contact/Updateliste/${id}`,values)
}


export const deleteContact=async (id)=>{
    const deleted=await axios.delete(`http://localhost:5000/contact//Removeliste/${id}`)
}