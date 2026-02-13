import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { foodUser } from './foodSlice';

function Food() {
  const { data1, loading, error } = useSelector((state) => state.food);
    console.log(data1);
    
  const dispatch = useDispatch();

  // mount -> empty array dependency........
  // mount -> dependency used as aa dispatch runs only one time during mounting phase......

  useEffect(() => {
    dispatch(foodUser()); // Triggers thunk
  }, [dispatch]);
 console.log(data1);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='contain'>
      {data1.map(user => (
        <div className='main'>
         <p>{user.strCategory}</p>
         {/* <p>{user.strCategoryThumb}</p> */}
         <img src={user.strCategoryThumb} alt="" />
         <p>{user.strCategoryDescription}</p>
        </div>
        
      ))}
      </div>
    
  );
}
export default Food