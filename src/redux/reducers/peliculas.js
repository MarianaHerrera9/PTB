
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  popupData: null
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
    setPopupData(state, action) {
      state.popupData = action.payload;
    }
  }
});

export const { setMovies, setPopupData } = moviesSlice.actions;
export default moviesSlice.reducer;
