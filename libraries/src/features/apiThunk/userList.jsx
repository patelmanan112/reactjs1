import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './userSlice';

function UserList() {
  const { data, loading, error } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  // mount -> empty array dependency........
  // mount -> dependency used as aa dispatch runs only one time during mounting phase......

  useEffect(() => {
    dispatch(fetchUsers()); // Triggers thunk
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
export default UserList