import { configureStore } from '@reduxjs/toolkit'
import couterReducer from '../features/counter/counterSlice.jsx'
import cartReducer from '../features/cart/cartSlice.jsx'
import usersReducer from '../features/apiThunk/userSlice.js'
import countReducer from '../features/count/countSlice.jsx'
import foodReducer from '../features/apiThunk1/foodSlice.js'
import movieReducer from '../features/apiThunk2/movieSlice.js'
import recipeReducer from '../features/apiThunk3/recipeSlice.jsx'
export const store = configureStore({
  reducer: {
    counter:couterReducer,
    cart:cartReducer,
    users: usersReducer,
    count:countReducer,
    food : foodReducer,
    movie : movieReducer,
    recipe : recipeReducer
  },
})

