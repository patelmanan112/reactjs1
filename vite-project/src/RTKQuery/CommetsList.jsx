import React from 'react';
import { useGetCommentsQuery } from './UserRTKquery';

const CommentsList = () => {
  const { data: users = [], error, isLoading } = useGetCommentsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users!</p>;

  return (
    
      <div style={{display : "flex", gap:"20px", flexWrap : "wrap"}}>
        {users.map(user => (
      <div style={{backgroundColor : "grey", height : "210px" , width: "250px" , padding : "10px" , fontSize : "18px" , fontFamily:"system-ui"}}>
         <p> Name : {user.name}</p>
         <p>Username : {user.username}</p>
         <p> Email: {user.email}</p>
         <p> City : {user.address.city}</p>
      </div>
      ))}
      </div>
  
  );
};

export default CommentsList;


