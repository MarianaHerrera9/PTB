import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../reducers/peliculas";
import seriesReducer from "../reducers/series"

export default configureStore({
  reducer: {
    movies: moviesReducer,
    series: seriesReducer
  }
});