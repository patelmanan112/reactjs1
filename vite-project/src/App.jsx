import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import { useReducer } from 'react'
import viteLogo from '/vite.svg'
import { BrowserRouter , Routes ,  Route } from 'react-router-dom'
import './App.css'
import SignUp from './components/signUp'
import UsersList from './RTKQuery/UsersList.jsx'
import CommentsList from './RTKQuery/CommetsList.jsx'
function App() {

  return (
    <>
   
      <BrowserRouter>
        <SignUp/>
      <Routes>
        <Route path='/' element ={<UsersList/>}></Route>
        <Route path='/api2' element={<CommentsList/>}></Route>
      </Routes>
      </BrowserRouter>
    
      {/* <UsersList/> */}
      {/* <CommentsList/> */}
    </>
  )
}

export default App





