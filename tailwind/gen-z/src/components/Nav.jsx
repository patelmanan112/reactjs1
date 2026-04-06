import React, { useState } from 'react'
import { FaArrowRight, FaBars, FaXmark } from 'react-icons/fa6'
export default function Nav() {
    var [menuBar, setMenu] = useState(false)
     return (
         <div className='w-full fixed top-0 z-90 backdrop-blur-2xl '>
             <div className="flex items-center justify-between px-6 py-8 border-2 border-amber-600 sm:px-12 md:px-24 lg:40">
 
                 <div>
                     <div className='w-4 h-4 rounded-full bg-emerald-900 space-x-2'></div>
                     <p className='text-2xl font-bold'>Gen-Z</p>
                     <div className='w-4 h-4 rounded-full bg-amber-500 space-x-2'></div>
                 </div>
                 <div className='hidden sm:flex items-center justify-between space-x-1.5'>
                     <a href='#home'>Home</a>
                     <a href='#about' > About</a>
                     <a href='#career' > Career</a>
                 </div>
                 <div className='hidden sm:block'><button className=' flex items-center border-2 gap-2 px-4 py-4 bg-amber-300 rounded-4xl '>
                         Contact us
                         <FaArrowRight />
                     </button>
                 </div>
                 {
                     menuBar ? <FaXmark onClick={() => { setMenu(!menuBar) }} className=" font-semibold text-3xl z-10 sm:hidden" /> :
                         <FaBars onClick={() => { setMenu(!menuBar) }} className=" text-3xl font-semibold sm:hidden" />
                 }
                 {
                     menuBar && <div className=" font-semibold text-2xl  flex flex-col items-center justify-center space-y-6 fixed top-0 right-0 h-screen w-40 bg-amber-400 sm:hidden">
                         <a onClick={() => { setMenu(!menuBar) }} href="#home">Home</a>
                         <a onClick={() => { setMenu(!menuBar) }} href="#about">About</a>
                         <a onClick={() => { setMenu(!menuBar) }} href="#Career">Career</a>
                         <button className=' flex items-center  gap-2 px-2.5 py-2.5 bg-amber-300 rounded-4xl text-xl '>
                             Contact us
                             <FaArrowRight />
                         </button>
                     </div>
 
                 }
 
             </div>
         </div>
     )
}