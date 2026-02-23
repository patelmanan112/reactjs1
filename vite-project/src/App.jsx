import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import { useReducer } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './components/signUp'
import UsersList from './RTKQuery/UsersList.jsx'
// import Fetch from './components/Fetch'
const intialState = {
  count :Number(localStorage.getItem("count")),
  name :  ""
}

function reducer(state , action){
  switch(action.type){
    case "Inc" : return {...state , count : state.count+1}
    case "Dec" : return {...state , count : state.count -1}
    case "name" : return {...state , name : "Manan"}
  }
}
function App() {
  const[state , dispatch] = useReducer(reducer,intialState )
  useEffect(()=>{
    localStorage.setItem("count" , state.count);
    console.log(localStorage.getItem("count"));
    
  }, [state.count])
  return (
    <>
      {/* <SignUp />
    
      <h1>Count : {state.count}</h1>
      <h1>Name : {state.name}</h1>
      <button onClick={() => {dispatch({type : 'Inc'})}}>Increse</button>
      <button onClick={() => { dispatch({type : 'Dec'})}}>Decrease</button>
      <button onClick={() => { dispatch({type : 'name'})}}>Reset</button>
      <Fetch/> */}
      <UsersList/>
    </>
  )
}

export default App





