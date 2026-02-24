import React from 'react'

export default function Child(props) {
        if (props.loading) return <p>Loading...</p>;
  if (props.error) return <p>Error loading users!</p>;
  return (
    <div>
       <p>id : {props.data.id}</p>
  <p> Name : {props.data.name}</p>
  <p>Email : {props.data.email}</p>
  <p> Username : {props.data.username}</p>
    </div>
  )
}
