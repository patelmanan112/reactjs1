import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { recipeUser } from './recipeSlice';

function Recipe() {
  const { data4, loading, error } = useSelector((state) => state.recipe);
    console.log(data4);
    
  const dispatch = useDispatch();

  // mount -> empty array dependency........
  // mount -> dependency used as aa dispatch runs only one time during mounting phase......

  useEffect(() => {
    dispatch(recipeUser()); // Triggers thunk
  }, [dispatch]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='contain'>
      {data4.map(user => (
        <div className='main'>
         <p>{user.name}</p>
         <p>{user.ingredients}</p>
         <img src={user.image} alt="" />
        </div>
        
      ))}
      </div>
    
  );
}
export default Recipe