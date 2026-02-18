import React from 'react';
import { Provider } from 'react-redux';
import { store } from './fetaure/store';
import UsersList from './UsersList';

const App = () => (
  <Provider store={store}>
    <UsersList />
  </Provider>
);

export default App;