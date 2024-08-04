import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
function HostLayoute() {
  return (
    <>
   <nav className='flex  p-8 gap-5 '>
<NavLink end className={({isActive}) => isActive ? "active-link" : null} to='/host'>DASHBOARD</NavLink>
<NavLink className={({isActive}) => isActive ? "active-link" : null} to="/host/income">INCOME</NavLink>
<NavLink className={({isActive}) => isActive ? "active-link" : null} to="/host/vans">VANS</NavLink>
<NavLink className={({isActive}) => isActive ? "active-link" : null} to="/host/review">REVIEW</NavLink>
   </nav>
<Outlet/>
    </>
  )
}

export default HostLayoute