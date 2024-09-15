import React from 'react'

export default function Footer() {
  return (
    <>
    <div className="bg-[#2C3E50] ">
<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 justify-around pt-16 text-white text-center">
    <div className=' h-40'>
        <h1 className='text-3xl font-semibold' >LOCATION</h1>
        <p className='pt-4 py-4'>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
    </div>
    <div className=''>
        <h3 className='text-3xl font-semibold pb-4'>AROUND THE WEB</h3>
        
        <i class="fa-brands fa-facebook p-3 border rounded-full m-1"></i>
        <i class="fa-brands fa-twitter p-3 border rounded-full m-1"></i>
        <i class="fa-brands fa-linkedin-in p-3 border rounded-full m-1"></i>
        <i class="fa-solid fa-globe p-3 border rounded-full m-1"></i>
    </div>
    <div className=''>
        <h3 className='text-3xl font-semibold pb-4' >ABOUT FREELANCER</h3>
        <p>Freelance is a free to use, licensed Bootstrap <br/> theme created by Route</p>
    </div>
</div>

    </div>
    <div className=" h-20 text-white  bg-[#0B1015] text-center pt-5 ">
        <p>
        Copyright © Your Website 2021
        </p>
    </div>
    
    </>
  )
}
