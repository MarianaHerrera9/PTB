import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  series: [],
  popupData: null
};

const seriesSlice = createSlice({
  name: "series",
  initialState,
  reducers: {
    setSeries(state, action) {
      state.series = action.payload;
    },
    setPopupData(state, action) {
      state.popupData = action.payload;
    }
  }
});

export const { setSeries, setPopupData } = seriesSlice.actions;
export default seriesSlice.reducer;
