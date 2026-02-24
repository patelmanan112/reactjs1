
import {Link} from 'react-router-dom'
import React from 'react'


export default function SignUp() {
  return (
    <div style={{display : "flex" , justifyContent : "space-evenly"}}>
      <h1><Link to={"/api2"}>API2</Link></h1>
      <h1><Link to={"/"}>Home</Link></h1>
    </div>
  )
}
