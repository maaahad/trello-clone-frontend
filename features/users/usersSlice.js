// --------------------------------------------------
// import

// redux toolkit
import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    currentUser: null,
  },
  reducers: {
    userLoggedIn: {
      reducer: (state, action) => {
        state.currentUser = action.payload;
      },
      // prepare: (user) => {},
    },
    userLoggedOut: {
      reducer: (state) => {
        state.currentUser = null;
      },
      // prepare: () => {},
    },
  },
});

// selector
export const selectCurrentUser = (state) => state.users.currentUser;

export const { userLoggedIn, userLoggedOut } = usersSlice.actions;

export default usersSlice.reducer;
