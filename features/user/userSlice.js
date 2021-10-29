// --------------------------------------------------
// import

// redux toolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// inhouser libs
import { jsonFetch } from "../../lib/backend-fetch";

const initialState = {
  status: "idle",
  profile: null,
  error: null,
};

// thunk creator
const fetchThunk = ({ url, method, body }) => {
  return jsonFetch(url, method, body);
};
export const getUserIn = createAsyncThunk("user/getUserIn", fetchThunk);

export const logUserOut = createAsyncThunk("user/logUserOut", fetchThunk);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // this may re-render a component .... DOUBLE CHECK
    resetStatus(state) {
      console.log("I am here in resetStatus");
      state.status = "idle";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUserIn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserIn.fulfilled, (state, action) => {
        state.status = "succeeded";
        // in this case user.loggedin should be true
        state.profile = action.payload;
      })
      .addCase(getUserIn.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(logUserOut.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logUserOut.fulfilled, (state) => {
        state.status = "succeeded";
        state.profile = null;
      })
      .addCase(logUserOut.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// selectors
export const selectCurrentProfile = (state) => state.user.profile;
export const selectCurrentUser = (state) => state.user.profile.user;

// action creators
export const { resetStatus } = userSlice.actions;

export default userSlice.reducer;
