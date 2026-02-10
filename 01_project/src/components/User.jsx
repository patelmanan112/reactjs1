import React from 'react'
import { useEffect , useState} from 'react'
export default function User() {
    var[user , setUser] = useState([])
    useEffect(()=>{
        fetch("https://dummyjson.com/users")
        .then((res)=>res.json())
        .then((data)=>{
            setUser(data.users)
        })
    },[])
    console.log(user)
  return (
    <div>
      {user.map((element)=>(
        <div>
            <img src={element.image} alt="" />
            <p>first name : {element.firstName}</p>
            <p>Last name : {element.lastName}</p>
            <p>age : {element.age}</p>
            <p>gender : {element.gender}</p>
            <p>Phone : {element.phone}</p>
        </div>
      ))}
    </div>
  )
}
