import { createSlice } from "@reduxjs/toolkit";

const watchSlice = createSlice({
  name: "watch",
  initialState: null,
  reducers: {
    watchHandler: (state, action) => action.payload,
  },
});

export const { watchHandler } = watchSlice.actions;
export default watchSlice.reducer;
