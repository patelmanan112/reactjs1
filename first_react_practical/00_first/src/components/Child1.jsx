import React from 'react'
import Child2 from "./Child2.jsx"
import './Child1.css'
const Child1 = React.memo(
  (props) => {

    function handle(props) {
      // console.log(`Child1 function got re-render:  ${props.value}`);
      return <p>Handle Function is called</p>
    }

    return (
      <>
        <p>Child1 Component</p>
        {handle()}
        {props.fun()}
        <div className="light" style={{ backgroundColor: props.check1 ? "black" : "white" }}    >
          <h1>Hello</h1>
        </div>
        <Child2 />
      </>
    )
  }
)

export default Child1
