import React from 'react'
import { FaAmazon, FaFacebook, FaGoogle, FaMicrosoft, FaTelegram, FaTwitter, FaWhatsapp, FaX } from 'react-icons/fa6'

export default function Partner() {
  return (
    <div className='flex flex-col gap-10 justify-center items-center mt-20'>
      <h1 className='text-5xl hover:text-blue-800 duration-75 transition'>Trusted by our Partners</h1>

      <div className=" flex  gap-5"> 
        <FaMicrosoft className='w-10 h-10 hover:scale-115 duration-75  transition'/>
        <FaAmazon className='w-10 h-10 hover:scale-115 duration-75  transition'/>
        <FaWhatsapp className='w-10 h-10 hover:scale-115 duration-75  transition'/>
        <FaTwitter className='w-10 h-10 hover:scale-115 duration-75  transition'/>
        <FaX className='w-10 h-10 hover:scale-115 duration-75  transition'/>
        <FaFacebook className='w-10 h-10 hover:scale-115 duration-75  transition'/>
        <FaGoogle className='w-10 h-10 hover:scale-115 duration-75  transition'/>
        <FaTelegram className='w-10 h-10 hover:scale-115 duration-75  transition '/>
      </div>
    </div>
  )
}
