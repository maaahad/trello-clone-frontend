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
export const signup = createAsyncThunk("user/signup", fetchThunk);
export const login = createAsyncThunk("user/login", fetchThunk);
export const logout = createAsyncThunk("user/logout", fetchThunk);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signup.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = "succeeded";
        // in this case user.loggedin should be true
        state.profile = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profile = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = "idle";
        state.profile = null;
        state.error = null;
      });
  },
});

// selectors
export const selectCurrentProfile = (state) => state.user.profile;
export const selectCurrentUser = (state) => state.user.profile.user;

// action creators

export default userSlice.reducer;
