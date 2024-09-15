import React from 'react'

export default function Contact() {
  return (
  <>
  {/* <h1 className='text-4xl font-bold text-center text-[#2C3E50] pt-5'>CONTACT SECTION</h1>
   <div className=' flex justify-center text-[#2C3E50] '>
      <div className='border-b-4 w-1/12 border-[#2C3E50] '> </div>
      <i class="fa-solid fa-star m-3 relative top-4"></i> 
      <div className='border-b-4 w-1/12 border-[#2C3E50]'></div>
      </div>


      <div className="max-w-3xl mx-auto m-20">
        <label className='text-[#1ABC9C] group'>userName:</label>
      <input
        type="text"  className="mb-5 border-b  rounded w-full py-2 px-3 text-gray-700  leading-10 focus:outline-none focus:shadow-outline"
        placeholder="userName"
      />
       <label className='text-[#1ABC9C]'>userAge:</label>
      <input
        type="text" className="mb-5  border-b rounded w-full py-2 px-3 text-gray-700 leading-10 focus:outline-none focus:shadow-outline"
        placeholder="userAge"
      />
       <label className='text-[#1ABC9C]'>userEmail:</label>
      <input
        type="email" className="mb-5  border-b rounded w-full py-2 px-3 text-gray-700 leading-10 focus:outline-none focus:shadow-outline"
        placeholder="userEmail"
      />
       <label className='text-[#1ABC9C]'>userPassword:</label>
      <input
        type="password" className="mb-5  border-b rounded w-full py-2 px-3 text-gray-700 leading-10 focus:outline-none focus:shadow-outline"
        placeholder="userPassword"
      />
       <button type="submit" class="text-white bg-[#1ABC9C] font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Send Message</button>
    </div> */}


<h1 className='text-4xl font-bold text-center text-[#2C3E50] pt-5'>CONTACT SECTION</h1>
   <div className=' flex justify-center text-[#2C3E50] '>
      <div className='border-b-4 w-1/12 border-[#2C3E50] '> </div>
      <i class="fa-solid fa-star m-3 relative top-4"></i> 
      <div className='border-b-4 w-1/12 border-[#2C3E50]'></div>
      </div> 

<form className="max-w-md mt-20 mx-auto">
  <div className="relative z-0 w-full mb-5 pt-10 group">
    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#1ABC9C] focus:outline-none focus:ring-0 focus:border-[#1ABC9C] peer" placeholder=" " required />
    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1ABC9C] peer-focus:dark:text-[#1ABC9C] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userName</label>
  </div>
  <div className="relative z-0 w-full mb-5 pt-10 group">
    <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#1ABC9C] focus:outline-none focus:ring-0 focus:border-[#1ABC9C] peer" placeholder=" " required />
    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1ABC9C] peer-focus:dark:text-[#1ABC9C] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userAge</label>
  </div>
  <div className="relative z-0 w-full mb-5 pt-10 group">
    <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#1ABC9C] focus:outline-none focus:ring-0 focus:border-[#1ABC9C] peer" placeholder=" " required />
    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1ABC9C] peer-focus:dark:text-[#1ABC9C] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userEmail</label>
  </div>
    <div className="relative z-0 w-full mb-5 group  pt-10">
      <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#1ABC9C] focus:outline-none focus:ring-0 focus:border-[#1ABC9C] peer" placeholder=" " required />
      <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1ABC9C] peer-focus:dark:text-[#1ABC9C] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userPassword</label>
  
  </div>
  <button type="submit" className="text-white mb-10 bg-[#1ABC9C] hover:bg-[#1ABC9C] focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#1ABC9C] dark:hover:bg-[#1ABC9C] dark:focus:ring-[#1ABC9C]">Send Message</button>
</form>



  </>
  )
}
