import React from 'react'
import { useState , useRef } from 'react'
export default function SignUp() {
    // const[data , setdata] = useState({name :'', email:"", number:''});
    const name1Ref = useRef();
    const email1Ref = useRef();
    const num1Ref = useRef();
     var getData 
    function store(event){
        event.preventDefault();

        const currentData = {
            name : name1Ref.current.value,
            email : email1Ref.current.value,
            number : num1Ref.current.value
        }
        // localStorage.setItem('name', data.name);
        // localStorage.setItem('email', data.email);
        // localStorage.setItem('number', data.number);
        localStorage.setItem("userData", JSON.stringify(currentData))
        console.log("hello executed");
        name1Ref.current.style.color = 'green'
        event.target.form.reset();
        getdata1();
    }
    function getdata1(){
     getData = JSON.parse(localStorage.getItem("userData"));
    console.log(typeof getData);
    console.log(getData["name"]);
    }

    
    // function handleData(event){
    //     event.preventDefault();
    //     setdata({...data , [event.target.name] : event.target.value})
    //     console.log(event.target.name);
        
    // }
    
  return (
  <>
  <h1>Sign Up</h1>
  <form action="">
    {/* <input type="text" placeholder='enter your name' name='name' value={data.name} onChange={handleData} /> <br />
    <input type="text" placeholder='enter your email' name='email' value={data.email}  onChange={handleData}/> <br />
    <input type="number" placeholder='enter your number' name='number' value={data.number} onChange={handleData}/> <br /> */}

        <input type="text" placeholder='enter your name' name='name' ref={name1Ref} /> <br />
    <input type="text" placeholder='enter your email' name='email' ref={email1Ref} /> <br />
    <input type="number" placeholder='enter your number' name='number' ref={num1Ref} /> <br />
    <button type='button' onClick={store}>Submit</button>
  </form>

  <div>
   
  </div>
  </>
  )
}
