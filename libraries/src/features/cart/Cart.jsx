import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fullName, lastName, age, number } from './cartSlice'
import { useState } from 'react'
 function Cart() {
    const fullname = useSelector((state)=>  state.cart.fullName)
    const lastname = useSelector((state)=>  state.cart.lastName)
    const age12 = useSelector((state)=>  state.cart.age)
    const number12 = useSelector((state)=>  state.cart.number)
    const[name1 , setName1] = useState("");
    const[name2 , setName2] = useState("");
    const[ageValue , setage] = useState(0);
    const[numberValue , setNumber1] = useState(0);
    const dispatch = useDispatch();
    function addAll(){
        dispatch(fullName(name1))
        dispatch(lastName(name2))
        dispatch(age(ageValue))
        dispatch(number(numberValue))
        console.log(name1 , name2 , ageValue , numberValue);
        
    }
  return (
    <div>
      <input type="text" placeholder='enter first name' onChange={(e)=>{setName1(e.target.value)}} /> <br /> <br/>
      <input type="text" placeholder='enter last name' onChange={(e)=>{setName2(e.target.value)}} /> <br /> <br/>
      <input type="text" placeholder='enter your age' onChange={(e)=>{setage(e.target.value)}} />  <br/> <br/>
      <input type="text" placeholder='enter number' onChange={(e)=>{setNumber1(e.target.value)}}/> <br/> <br/>
      <button onClick={addAll}>submit</button>

 <p>Full Name: {fullname}</p>
<p>Last Name: {lastname}</p>
<p>Age: {age12}</p>
<p>Mobile Number: {number12}</p>

    </div>
  )
}
export default Cart