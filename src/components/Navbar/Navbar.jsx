import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
  


export default function Navbar() {
  const [open, setopen] = useState(false)
  function toggle(){

    setopen(!open)
  }
  return (
   <>
<nav className='bg-[#2C3E50] p-9 '>
  <div className="flex flex-wrap items-center justify-between ">
      <span className="text-white text-3xl font-bold">START FRAMEWORK</span>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <svg onClick={toggle} className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path  stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div className=" w-full  md:w-auto" id="navbar-default">
      <ul className={` md:block font-medium  lg:flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700  ${open?'block' : 'hidden'}`}>
        <li className="text-white px-3 py-1 rounded-md text-lg font-bold"><NavLink to={'About'}> ABOUT </NavLink></li>
        <li className="text-white px-3 py-1 rounded-md text-lg font-bold"><NavLink to={'portfolio'}> PORTFOLIO </NavLink></li>
        <li className="text-white px-3 py-1 rounded-md text-lg font-bold"><NavLink to={'contact'}> CONTACT </NavLink></li>
       
      </ul>
    </div>
  </div>
</nav>

  
   </>

  
  )
 
}
