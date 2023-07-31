import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'

export default function Navbar() {
  return (
    <div className='Navbar'>
    <nav className="navbar navbar-expand-lg navBar-dark bg-primary">
     <div className="container-fluid">
       <Link to="/"  className="navbar-brand" >Winston apartment
       </Link>
    
    <Link className=' btn btn-outine-light' to ="/adduser"> add user</Link>
    </div>
  </nav>
  
    </div>
  )
}
