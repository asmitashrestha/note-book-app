import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between '>
      <h2 className='font-bold ml-6 text-2xl text-gray-800'>MirageMemoir</h2>
      <nav className='flex'>
        <ul><Link to={'/login'}>Login</Link></ul>
        <ul><Link to={'/signup'}>SignUp</Link></ul>
        <ul><Link to={'/addnotes'}>Add Notes</Link></ul>
      </nav>  
    </div>
  )
}

export default Navbar
