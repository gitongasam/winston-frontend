import React, { useEffect, useState, } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function EditUser() {

  let navigate =  useNavigate()

  const {id}=useParams
 
  const [user,setUser]= useState({   
    firstName:"",
    lastName:"",
    email:"",
    phoneNumber   :""
  })

  // decontruct

  const {firstName,lastName,email,phoneNumber} = user

  const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})

  }
  const onSubmit= async(e)=>{
    e.preventDefault();

    await axios.put(`http://localhost:8080/update/${id}`,user)
    navigate("/")

  }
  const loadUsers= async(e)=>{
    const  result = await axios.get(`http://localhost:8080/update/${id}`)
    setUser(result.data)
  }

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);
  

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border roudent p-4 mt-2 shadow '>
                <h2 className='text-center m-4'>Edit Tenant</h2>

                <form onSubmit={(e) => onSubmit(e)}>
                <div className='mb-3'>
                  <label htmlFor="Name" className='form-label'>
                    first Name
                  </label>

                  <input type={'text'}
                  className='form-control'
                  placeholder='Enter your first Name'
                  name='firstName'
                  value={firstName}
                  onChange={(e)=>onInputChange(e)}

                   />
                  
                  <label htmlFor="Name" className='form-label'>
                    Last Name
                  </label>

                  <input type={'text'}
                  className='form-control'
                  placeholder='Enter your last Name'
                  name='lastName'
                  value={lastName}
                  onChange={(e)=>onInputChange(e)}

  
                  />
                  <label htmlFor="Name" className='form-label'>
                    email
                  </label>

                  <input type={'email'}
                  className='form-control'
                  placeholder='Enter your email '
                  name='Email'
                  value={email}
                  onChange={(e)=>onInputChange(e)}

                  />

                  <label htmlFor="Name" className='form-label'>
                    phone number
                  </label>

                  <input type={'number'}
                  className='form-control'
                  placeholder='Enter your phone number'
                  name='phoneNumber'
                  value={phoneNumber}
                  onChange={(e)=>onInputChange(e)}

                  />
                  
                </div>

                <button type='submit' className='btn btn-outline-primary'>register</button>
                <Link  className='btn btn-outline-danger mx-2' to="/">cancel</Link>

              </form>                
            </div>
        </div>
      
    </div>
  )
}
