import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Child from './components/Child'
import './App.css'

function App() {

 useEffect(()=>{
 async function storeData(){
 const res = await fetch("https://fakestoreapi.com/users");
 const data = await res.json();
 setData(data)
 console.log(data)
 }
 storeData()
 }, [])

function task(){
console.log(str)
}
const[data , setData] = useState([]);
const[str , setStr] = useState("");

// const callFilter= data.filter((element)=>
//    element.firstname.includes(str.toLowerCase()))
  return (
    <>

   
    </>
  )
}

export default App
