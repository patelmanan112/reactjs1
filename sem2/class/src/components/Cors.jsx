import React from 'react'
import { useState , useEffect } from 'react'
export default function Cors() {
    const[data , setData] = useState([]);
   async function click(){
    const res = await fetch("http://localhost:3000/");
    // http://localhost:3000/users
    const data = await res.json();
    setData(data);
    console.log(data , "Fetch");
    
   }
  return (
    <div>
      <button onClick={()=>{click()}}>click me</button>
    </div>
  )
}
