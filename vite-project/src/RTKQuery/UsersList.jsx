import React from 'react';
import { useGetUsersQuery } from './UserRTKquery';
import { useState } from 'react';
import { useRef } from 'react';
import Child from './Child';

const UsersList = () => {
  const[id , setId] = useState(0);
const ref = useRef();


  const { data: users = [], error, isLoading } = useGetUsersQuery(id);

  function callFun(){
    setId(ref.current.value)
  }
  return (<>
  
  <input type="text" ref={ref} />
  <button onClick={()=>{callFun()}}>Click me</button>


<Child data ={users} loading ={isLoading} error={error}/>
 
  </>
    
  );
};

export default UsersList;


