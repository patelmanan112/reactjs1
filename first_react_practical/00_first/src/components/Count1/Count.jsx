import React from 'react'
import './count.css'
import { useState } from 'react'

 function Count() {
    var[count1 , CountIn] = useState(0);
    function changeCount(){
        CountIn(++count1);
    }
  return (
    <div>
      <p>Count : {count1}</p>
      <button onClick={changeCount}>Click Me</button>
    </div>
  )
}
export default Count
