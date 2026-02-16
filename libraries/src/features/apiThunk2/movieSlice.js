
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const movieUser = createAsyncThunk(
  'movie/movieUser',
  async () => {
    const response = await fetch('https://imdb.iamidiotareyoutoo.com/search?q=Spiderman');
    return response.json(); // Returns data to fulfilled action
  },

    {
    condition: (_, { getState }) => {
      const { movie } = getState();
      if (movie.data?.length > 0 || movie.loading) {  // Add || users.loading
        console.log(' Already loading/data exists, skipping');
        return false;
      }
      return true;
    }
  }
);


const movieSlice = createSlice({
  name: 'movie',
  initialState: { data2: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(movieUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log(state.error);
        
      })
      .addCase(movieUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data2 = action.payload.description; // Data from API
        console.log(state.data2)
      })
      .addCase(movieUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log(state.error);
        
      });
  },
});

export default movieSlice.reducer;