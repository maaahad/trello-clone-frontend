// --------------------------------------------------
// import
// redux toolkit
import { configureStore } from "@reduxjs/toolkit";

// SliceReducers
import userReducer from "../../features/user/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
