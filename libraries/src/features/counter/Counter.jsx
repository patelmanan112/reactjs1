import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'
import { useState } from 'react'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const[values , setValues] = useState(0)
  const dispatch = useDispatch()

  return (
    <div>
        <p>{count}</p>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <input type="text" onChange={(e)=>{setValues(e.target.value)}} />
             <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(values))}
        >
          set
        </button>
      </div>
    </div>
  )
}