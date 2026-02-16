import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './components/signUp'
function App() {
  const [count, setCount] = useState(0)
  const getdata = localStorage.getItem("userData")
  console.log(getdata);
  
  return (
    <>
     <SignUp/>
     <p>{getdata.name}</p>
    </>
  )
}

export default App
