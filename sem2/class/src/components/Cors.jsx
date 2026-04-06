import React from 'react'
import { useContext } from 'react'
import { context } from '../App'
export default function Cors() {
  const {data , setData} = useContext(context)
  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.age}</h1>
      <h1>{data.roll}</h1>
      <h1>{data.dob}</h1>
    </div>
  )
}
