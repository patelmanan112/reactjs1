import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fullName: "",
  lastName:"",
  age:0,
  number:0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    fullName:(state , action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.fullName = (action.payload)
      
    },
    lastName: (state , action) => {
      state.lastName = (action.payload)
    
      
    },
    age: (state, action) => {
      state.age = Number(action.payload)
    },
    number: (state, action) => {
      state.number = (action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { fullName, lastName, age,number  } = cartSlice.actions

export default cartSlice.reducer