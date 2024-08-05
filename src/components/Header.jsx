import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
function Header() {
  return (
    <header className=' h-[80px] bg-[#ffd9ab] flex  w-full'>
    <Link to='/' className='relative top-1 left-5 font-extrabold text-lg my-3 py-3'>CARS DOME </Link>
    <nav className='flex space-x-8 font-medium absolute  right-12 top-7 text-smd '>
    
    <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/vehicles">VEHICLES</NavLink>
    <NavLink className={({isActive}) => isActive ? "active-link" : null}  to="/about">ABOUT</NavLink>
    <NavLink className={({isActive}) => isActive ? "active-link" : null}  to="/host">Host</NavLink>
    <NavLink className={({isActive}) => isActive ? "active-link" : null}  to="/login">< CgProfile className='text-2xl' /></NavLink>
    </nav>
          </header>
  )
}

export default Header