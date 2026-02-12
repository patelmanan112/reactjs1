import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, incrementBy5 } from './countSlice.jsx'

 function Count() {
  const count1 = useSelector((state) => state.count.value1)
  const count2 = useSelector((state) => state.count.value2)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
          <span>Count: {count1}</span> 
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button> <br />

         <span>Count: {count2}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementBy5())}
        >
          increase by 5
        </button>
      </div>
    </div>
  )
}
export default Count