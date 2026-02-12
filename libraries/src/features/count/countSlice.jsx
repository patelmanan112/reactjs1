import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value1: 0,
  value2:0
}

export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value1 += 1
      console.log(state.value1);
      
    },
    incrementBy5: (state) => {
      state.value2 += 5
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, incrementBy5 } = countSlice.actions

export default countSlice.reducer