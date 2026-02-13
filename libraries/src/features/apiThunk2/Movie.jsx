import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { movieUser } from './movieSlice';

function Movie() {
  const { data2, loading, error } = useSelector((state) => state.movie);
    console.log(data2);
    
  const dispatch = useDispatch();

  // mount -> empty array dependency........
  // mount -> dependency used as aa dispatch runs only one time during mounting phase......

  useEffect(() => {
    dispatch(movieUser()); // Triggers thunk
  }, [dispatch]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='contain'>
      {data2.map(user => (
        <div className='main'>
         <p>{user["#TITLE"]}</p>
         <p>{user["#ACTORS"]}</p>
         <img src={user["#IMG_POSTER"]} alt="" />
        </div>
        
      ))}
      </div>
    
  );
}
export default Movie