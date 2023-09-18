import { configureStore } from "@reduxjs/toolkit";
import liveReducer from "./liveSlice";
import timerReducer from "./timerSlice";
import watchReducer from "./watchSlice";

export default configureStore({
  reducer: {
    timer: timerReducer,
    live: liveReducer,
    watch: watchReducer,
  },
});
