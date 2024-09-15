import React from 'react'
import photo from '../../assets/img.svg'

export default function Home() {
  return (
    <>

 <div className='bg-[#1ABC9C]  text-white text-center'>
<img src={photo} alt="" className='w-1/6 pt-5 pb-7 m-auto ' />
      <h1 className='text-4xl font-bold  '>START FRAMEWORK</h1>
      <div className=' flex justify-center '>
      <div className='border-b-4 w-1/12  '> </div>
      <i class="fa-solid fa-star m-3 relative top-4"></i> 
      <div className='border-b-4 w-1/12 '></div>
      </div>
      <p className='pb-10 pt-5'>Graphic Artist - Web Designer - Illustrator</p>
</div>  

    </>  
  )
}
