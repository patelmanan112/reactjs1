import { configureStore } from '@reduxjs/toolkit'
import couterReducer from '../features/counter/counterSlice.jsx'
import cartReducer from '../features/cart/cartSlice.jsx'
import usersReducer from '../features/apiThunk/userSlice.js'
import countReducer from '../features/count/countSlice.jsx'
export const store = configureStore({
  reducer: {
    counter:couterReducer,
    cart:cartReducer,
    users: usersReducer,
    count:countReducer
  },
})

