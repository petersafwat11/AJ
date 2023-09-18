import { createSlice } from "@reduxjs/toolkit";

const liveSlice = createSlice({
  name: "live",
  initialState: null,
  reducers: {
    liveHandler: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },
  },
});

export const { liveHandler } = liveSlice.actions;
export default liveSlice.reducer;
