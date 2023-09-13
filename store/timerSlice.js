import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
  name: "timer",
  initialState: null,
  reducers: {
    decrement: (state, action) => action.payload,
  },
});

export const { decrement } = timerSlice.actions;
export default timerSlice.reducer;
