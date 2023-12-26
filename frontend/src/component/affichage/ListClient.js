import { useEffect } from 'react';
import { fetchAllContact } from '../../api/api';
import ClientCard from './ClientCard'
import './ListClient.css';
import {useDispatch, useSelector} from 'react-redux'
import { getContact } from '../../store/contactSlice';

const ListClient = () => {
  const Contact = useSelector(state=>state.contact)
  console.log('redux',Contact)

  const dispatch=useDispatch()

  const getAllContact=async()=>{
    const data=await fetchAllContact()
    console.log('Ma data de db', data.contacts)
    dispatch(getContact(data.contacts))
  }


  useEffect(()=>{
    getAllContact()
  },[])



  return (
    <div className='autre'>
       <section id="main">
    <nav>
      <div className="logo">
        <a href="#">LogRocket</a>
      </div>
      
      <ul className="menu">
        <li>
          <a href="/dashboard">Home</a>
        </li>
        <li>
          <a href="/affichageClient">Services</a>
        </li>
        <li>
          <a href="/ajoutClient">Ajout</a>
        </li>
      </ul>
    </nav>

  </section>
  {/*Services*/}
  <section id="services">
    <div className="title">

    </div>
    <div className="content">
      {Contact.map((el)=> <ClientCard users={el}/>)}
    </div>
  </section>
    </div>
  )
}

export default ListClient
