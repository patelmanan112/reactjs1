import React from 'react'
import { useEffect , useState} from 'react'
export default function Post() {
    var[value , setValue ]= useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=> res.json())
        .then((data)=>{
            setValue(data)
            // console.log(data)
        })
    },[])
    console.log(value)
  return (
    <div>
      {value.map((data)=>(
    
      <div key={data.id}>
          <h1>{data.title}</h1>
        <p>{data.body}</p>
        <small>{data.id}</small>
      </div>
      ))}
    </div>
  )
}
