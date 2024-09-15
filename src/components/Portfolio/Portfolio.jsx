import React, { useState } from 'react'
import img1 from  '../../assets/poert1.png'
import img2 from  '../../assets/port2.png'
import img3 from  '../../assets/port3.png'


export default function Portfolio() {

  const [open, setopen] = useState(false)
  
    function toggle(){

      setopen(!open)
    }

  
  return (
   <>
   <h1 className='text-4xl font-bold text-center text-[#2C3E50] pt-5'>PORTFOLIO COMPOENET</h1>
   <div className=' flex justify-center text-[#2C3E50] '>
      <div className='border-b-4 w-1/12 border-[#2C3E50] '> </div>
      <i  class="fa-solid fa-star m-3 relative top-4"></i> 
      <div className='border-b-4 w-1/12 border-[#2C3E50]'></div>
      </div>

 <div className="m-20">

<div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3    gap-5 w-[90%] m-auto ">
<div className='relative group '>
  <img onClick={toggle} src={img1} className=' object-cover  rounded-[30px] ' alt="" />
  <div className='absolute inset-0 rounded-[30px]  bg-[#19A78A] bg-opacity-0  group-hover:bg-opacity-90  group-hover:overflow-hidden transation duration-1000 flex items-center justify-center '>
  <i className="fa-solid fa-plus font-bold text-9xl text-white opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:overflow-hidden "></i>
  </div>
  </div>
<div className='relative group '>
  <img src={img2} className=' object-cover  rounded-[30px] ' alt="" />
  <div className='absolute inset-0 rounded-[30px] bg-[#19A78A] bg-opacity-0  group-hover:bg-opacity-90  group-hover:overflow-hidden transation duration-1000 flex items-center justify-center '>
  <i className="fa-solid fa-plus font-bold text-9xl text-white opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:overflow-hidden "></i>
  </div>
  </div>
<div className='relative group '>
  <img src={img3} className=' object-cover  rounded-[30px] ' alt="" />
  <div className='absolute inset-0 rounded-[30px] bg-[#19A78A] bg-opacity-0  group-hover:bg-opacity-90  group-hover:overflow-hidden transation duration-1000 flex items-center justify-center '>
  <i className="fa-solid fa-plus font-bold text-9xl text-white opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:overflow-hidden "></i>
  </div>
  </div>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-[90%] m-auto mt-5">
<div className='relative group '>
  <img src={img1} className=' object-cover  rounded-[30px] ' alt="" />
  <div className='absolute inset-0 rounded-[30px] bg-[#19A78A] bg-opacity-0  group-hover:bg-opacity-90  group-hover:overflow-hidden transation duration-1000 flex items-center justify-center '>
  <i className="fa-solid fa-plus font-bold text-9xl text-white opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:overflow-hidden "></i>
  </div>
  </div>
<div className='relative group '>
  <img src={img2} className=' object-cover  rounded-[30px] ' alt="" />
  <div className='absolute inset-0 rounded-[30px] bg-[#19A78A] bg-opacity-0  group-hover:bg-opacity-90  group-hover:overflow-hidden transation duration-1000 flex items-center justify-center '>
  <i className="fa-solid fa-plus font-bold text-9xl text-white opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:overflow-hidden "></i>
  </div>
  </div>
<div className='relative group '>
  <img src={img3} className=' object-cover  rounded-[30px] ' alt="" />
  <div className='absolute inset-0 rounded-[30px] bg-[#19A78A] bg-opacity-0  group-hover:bg-opacity-90  group-hover:overflow-hidden transation duration-1000 flex items-center justify-center '>
  <i className="fa-solid fa-plus font-bold text-9xl text-white opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:overflow-hidden "></i>
  </div>
  </div>
  </div>
      </div>
 
   </>
  )
}
