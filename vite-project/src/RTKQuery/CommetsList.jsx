import React from 'react';
import { useGetCommentsQuery } from './UserRTKquery';

const CommentsList = () => {
  const { data: users = [], error, isLoading } = useGetCommentsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users!</p>;

  return (
    
      <div style={{display : "flex", gap:"10px"}}>
        {users.map(user => (
      <div>
         <p>{user.name}</p>
         <p>{user.username}</p>
         <p>{user.email}</p>
         <p>{user.address.city}</p>
      </div>
      ))}
      </div>
  
  );
};

export default CommentsList;


