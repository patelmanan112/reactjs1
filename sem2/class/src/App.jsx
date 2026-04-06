
import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
  import Cors from './components/Cors'
   export const context = createContext();
export default function App() {
  const[data , setData] = useState({name : "Manan" , age : 18 , roll : "Student" , dob : "1-Dec-2007"})

  return (
    <div>
    <h1>Hello! Good Morning </h1>
    <context.Provider value = {{data , setData}}>
      <Cors/>
    </context.Provider>
    </div>
  )
}
