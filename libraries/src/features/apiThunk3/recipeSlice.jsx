
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const recipeUser = createAsyncThunk(
  'recipe/recipeUser',
  async () => {
    const response = await fetch('https://dummyjson.com/recipes');
    return response.json(); // Returns data to fulfilled action
  }
);


const recipeSlice = createSlice({
  name: 'recipe',
  initialState: { data4: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(recipeUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log(state.error);
        
      })
      .addCase(recipeUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data4 = action.payload.recipes; // Data from API
      })
      .addCase(recipeUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log(state.error);
        
      });
  },
});

export default recipeSlice.reducer;