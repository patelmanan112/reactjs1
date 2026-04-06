import React from 'react'
import { teams } from '../assets/assets'
import { services } from '../assets/assets'
export default function Services() {
  return (
    <div className='mt-34 w-full h-screen bg-amber-100'>
     <div className="grid gap-10 md:grid-cols-2  sm:grid-cols-1  grid-cols-1 justify-center items-center">

         {services.map((ele)=>(
        <div className="flex gap-4 justify-center items-center hover:bg-gray-400 rounded-4xl p-5">
    <div className="">
            <ele.icon className='w-20 h-20 rounded-full '/>
    </div>
        <div className="">
               <h2>{ele.title}</h2>
           <p>{ele.description}</p>
        </div>
        </div>
      ))}
     </div>
    </div>
  )
}
