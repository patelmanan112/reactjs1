import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Hero from './components/Hero'
import Services from './components/Services'
import LoginForm from './pages/LoginForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
  
   <Nav/>
   <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/login' element = {<LoginForm/>}/>
    {/* <Route path='/' element = {[ <Hero/> , <Home/>]}/> */}
   </Routes>
    </>
  )
}

export default App
