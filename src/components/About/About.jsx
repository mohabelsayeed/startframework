import React from 'react'

export default function About() {
  return (
    <>
    
    <div className='bg-[#1ABC9C] text-white h-auto  pt-20'>
        <h1 className='text-4xl font-bold text-center '>ABOUT COMPONENT</h1>
        <div className=' flex justify-center'>
      <div className='border-b-4 w-1/12  '> </div>
      <i class="fa-solid fa-star m-3 relative top-4"></i> 
      <div className='border-b-4 w-1/12 '></div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:p-40'>
<div className=' '>
    <p>   
Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
    </p>
</div>

<div className=''>
    <p>
    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
    </p>
</div>
      </div>
    </div>
    
    </>
 
  )
}
