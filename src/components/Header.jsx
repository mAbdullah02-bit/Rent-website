import React from 'react'
import { NavLink,Link } from 'react-router-dom'

function Header() {
  return (
    <header className='relative h-[80px] bg-[#ffd9ab] flex justify-between w-full'>
    <Link to='/' className='relative top-1 left-5 font-extrabold text-lg my-3 py-3'>CARS DOME </Link>
    <nav className='space-x-5 font-medium absolute  right-12 top-7 text-smd '>
    
    <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/vehicles">VEHICLES</NavLink>
    <NavLink className={({isActive}) => isActive ? "active-link" : null}  to="/about">ABOUT</NavLink>
    <NavLink className={({isActive}) => isActive ? "active-link" : null}  to="/host">Host</NavLink>
    </nav>
          </header>
  )
}

export default Header