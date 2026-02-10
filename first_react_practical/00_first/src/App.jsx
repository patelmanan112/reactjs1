import { useState, useEffect, createContext, useMemo, useCallback , useRef , useReducer   } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Count from './components/Count1/Count'
// import Child1 from './components/Child1'
import Gallery from './components/Gallery';
import Child1 from './components/Child1.jsx'
import CardHolder from './components/CardHolder'
import useCustomEffect from './components/customHooks/useCustomEffect.js'
import Card from './components/Card.jsx'
// import Card from './components/Card';
// each components contains some state->  we have to update it(?)
// Topic ==> useState ->  hook
// import -> useState from -> react, syntax => var/let/const  [var_name , func_name] = useState(inital_value ->'0');

// step 1 : import useState from reat
// step 2 : var/let/const [var_name , func_name] = useState(intial_value);
// Routing => install package(libraries)
// npm install reat-router-dom
export var UserNotToBe = createContext();


function App() { 

  //  var [count, SetCount] = useState(0);
  // useEffect(() => 
  //  fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=9631a675593c4bdeacbe108a6d45ef99")
  //  .then((res)=> res.json())
  //  .then((data)=>{
  //  obj = data
  //  console.log(obj);

  //  })
  // }, [])
  // function funCall() {


  //   SetCount(++count);
  // }
  // var [count, setCount] = useState(0);

  // var[count , dispatch] = useReducer(reducer , 0);
  // let value = useRef(0);
  // value.current = value.current +1
  // var [name, setName] = useState("Manan");
  // var [value, setValue] = useState(5);
  // var [check, setCheck] = useState(false)
  // var [inputValue, setInputValaue] = useState("")

// var{value , err1} = useCustomEffect('');

  // const fun1 = useCallback(() => {
  //   console.log("parent function got re-rendered");
  //   return <p>Fucntion reference got chnage</p>
  // }, [count12])
  // function callInput(event) {
  //   setInputValaue(event.target.value);
  // }
  // function callFun() {
  //   console.log("delay happen");

  //   for (let i = 0; i < 100000000; i++) { }
  //   return value * 5;
  // }



  // function callFun1() {
  //   console.log("delay happen fun1");
  //   for (let i = 0; i < 100000000; i++) { }
  //   return value * 20;
  // }
  // function changeCount12() {
  //   setCount(++count12)
  // }
  // // useMemo(()=> funName , dependency)
  // let data = useMemo(() => callFun(value), [value]);
  // let data1 = callFun1(value);
  return (
    <div className="container">
        <Card/>
      {/* <p>{count}</p> */}
      {/* <p>{value.current}</p> */}
      {/* <button onClick={()=>setCount(++count)}>Click Me</button> */}
      {/* <UserNotToBe.Provider value={{name , count12}}>
      
    <Child1/>
      </UserNotToBe.Provider> */}
      {/* <Nav /> */}
      {/* <input type="text" onChange={callInput} />
      <p>Entered : {inputValue}</p>
      <Child1 value={"count12"} fun={fun1} check1={check} />
      <button onClick={() => setCheck(true)}>Click Me</button> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path='/card' element={<CardHolder />}></Route>
          <Route path='/' element={<CardHolder />}></Route>
          <Route path='/gallery' element={<Gallery />}></Route>
          <Route path='/card-gallery' element={[<Gallery />, <CardHolder />]}></Route>
        </Routes>
      </BrowserRouter> */}
      {/* <p>{count12}</p>
      <button onClick={changeCount12}>Click Me</button> */}
      {/* <button onClick={setCount(++count12)}>Click Me</button> */}
      {/* <p>{data}</p> */}
      {/* <p>{data1}</p> */}
      {/* <Gallery/> */}

      {/* <section>
        <div className="main">
          <div className="box1">
            <img src="https://images.unsplash.com/photo-1764957080687-9569e738a238?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D" id='photo' alt="" />
            <h2>Nature Photo</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit corrupti maiores sed placeat, rerum saepe perspiciatis sint fuga, numquam temporibus miniiure fugiat eearum facere illum ad odit minima, molestias similique accusantium aliquam delectus rerum suscipit sequi quaerat? Ea nostrum accusantium doloribus quia maxime.</p>
            <button>Read More </button>
          </div>

          <div className="box1">
            <img src="https://images.unsplash.com/photo-1764893216689-3a51d0d6404f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D" id='photo' alt="" />
            <h2>Nature Photo</h2>
            <p>Lorem ipsum dolor sit amet coperiam iure fugiat eligendi delectus, sunt et impedit quas. Culpa officiis ullam ipsum ipsam quibusdam saepe accusantium dolorem in. Tenetur facilis maiores vel earum facere illum ad odit minima, molestias similique accusantium aliquam delectus rerum suscipit sequi quaerat? Ea nostrum accusantium doloribus quia maxime.</p>
            <button>Read More </button>
          </div>
        </div>
      </section> */}


        {/* <CardHolder /> */}
        {/* <Count/> */}

    </div>

  )
}

export default App
