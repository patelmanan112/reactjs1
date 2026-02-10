import { configureStore } from '@reduxjs/toolkit'
import couterReducer from '../features/counter/counterSlice.jsx'
import cartReducer from '../features/cart/cartSlice.jsx'
export const store = configureStore({
  reducer: {
    counter:couterReducer,
    cart:cartReducer
  },
})

