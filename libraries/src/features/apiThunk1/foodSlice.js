
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const foodUser = createAsyncThunk(
  'food/foodUser',
  async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    return response.json(); // Returns data to fulfilled action
  }
);
console.log(foodUser);


const foodSlice = createSlice({
  name: 'food',
  initialState: { data1: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(foodUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log(state.error);
        
      })
      .addCase(foodUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data1 = action.payload.categories; // Data from API
        console.log(state.data1)
      })
      .addCase(foodUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log(state.error);
        
      });
  },
});

export default foodSlice.reducer;