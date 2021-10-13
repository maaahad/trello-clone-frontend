// --------------------------------------------------
// import
// redux toolkit
import { configureStore } from "@reduxjs/toolkit";

// SliceReducers
import usersReducer from "../../features/users/usersSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
  },
});
