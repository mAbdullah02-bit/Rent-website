import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

function Header() {
  return (
    <header className='h-[70px] md:h-[80px] bg-[#fabc70] flex justify-between items-center px-5 md:px-12 w-full'>
      <Link to='/' className='font-extrabold text-lg md:text-xl py-2'>
        CARS DOME
      </Link>
      <nav className='flex space-x-4  font-medium text-sm md:text-base '>
        <NavLink 
          className={({ isActive }) => isActive ? "active-link" : "hover:underline"} 
          to="/vehicles">
          VEHICLES
        </NavLink>
        <NavLink 
          className={({ isActive }) => isActive ? "active-link" : "hover:underline"} 
          to="/about">
          ABOUT
        </NavLink>
        <NavLink 
          className={({ isActive }) => isActive ? "active-link" : "hover:underline"} 
          to="/host">
          Host
        </NavLink>
        <NavLink 
          className={({ isActive }) => isActive ? "active-link" : "hover:underline"} 
          to="/login">
          <CgProfile className='text-xl md:text-2xl' />
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
