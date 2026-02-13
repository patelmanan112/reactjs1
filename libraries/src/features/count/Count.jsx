import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, incrementBy5 } from './countSlice.jsx'
import './Count.css'
 function Count() {
  const count1 = useSelector((state) => state.count.value1)
  const count2 = useSelector((state) => state.count.value2)
  const dispatch = useDispatch()

  return (
    <div>
      <div className='contain'>
          <span className='countVar'>Count: {count1}</span> 
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          className='btn'
        >
          Increment
        </button> <br />

         <span className='countVar'>Count: {count2}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementBy5())}
           className='btn'
        >
          increase by 5
        </button>
      </div>
    </div>
  )
}
export default Count