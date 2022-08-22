import { createSlice } from '@reduxjs/toolkit';
import {
  signupUser,
  loginUser,
  getCurrentUser,
  logOutUser,
} from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: '',
      email: '',
    },
    token: '',
    loading: false,
    error: null,
  },
  reducers: {
    changeError(state) {
      state.error = null;
    },
  },
  extraReducers: {
    [signupUser.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [signupUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.token = payload.token;
      state.user = payload.user;
    },
    [signupUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [loginUser.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.token = payload.token;
      state.user = payload.user;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getCurrentUser.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [getCurrentUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      console.log(payload);
      state.user = payload;
    },
    [getCurrentUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [logOutUser.fulfilled]: state => {
      state.loading = false;
      state.token = '';
      state.user.name = '';
      state.user.email = '';
      state.error = null;
    },
  },
});

export default authSlice.reducer;
export const { changeError } = authSlice.actions;
