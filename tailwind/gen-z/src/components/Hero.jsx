import React from 'react'
import profile1 from '../assets/profile1.jpg'
import profile2 from '../assets/profile2.jpg'
import profile3 from '../assets/profile3.jpg'
import profile4 from '../assets/profile4.jpg'
import { assets } from '../assets/assets.js'
export default function Hero() {
  return (
    <div className=' pt-40 flex flex-col justify-center  items-center gap-10 border-3 w-250 m-auto p-10 '>

      <div className='flex - border-2 p-3 w-100 justify-between rounded-3xl border-amber-600 md:'>

        <div className=" flex -space-x-3">
          <img src={profile1} className='h-10 w-10 rounded-full z-30 m' alt="" />
          <img src={profile2} className='h-10 w-10 rounded-full z-28 ' alt="" />
          <img src={profile3} className='h-10 w-10 rounded-full z-25' alt="" />
          <img src={profile4} className='h-10 w-10 rounded-full z-22' alt="" />
        </div>

        <div className=" text-center justify-center flex items-center">
          <h1 className='ml-6 text-center justify-center flex items-center'>Trusted by 1000+ clients </h1>
        </div>

      </div>

      <h1 className='text-5xl w-140 text-center'>Empower the brand with <span className='text-amber-700'>Marketing</span> strategy</h1>
      <p className='text-center max-w-xl mx-auto font-semibold mb-8'>At our agency, we take pride that deliver the products whicb contains Creativity, Strategy, and Technology</p>

      <div className="flex items-center justify-center gap-3">
        <button className='p-3 bg-amber-300 rounded-full font-semibold hover:scale-105 duration-100 transition cursor-pointer'> Contact Us</button>
        <button className='p-3 bg-cyan-950 text-white rounded-full font-semibold hover:scale-105 duration-100 transition cursor-pointer'> Feedback Us</button>
      </div>
      <div className='mt-15 mx-w-5xl mx-auto shadow-overflow-hidden rounded-2xl'>
        <img src={assets.heroImg} alt="" />
      </div>
    </div>
  )
}
