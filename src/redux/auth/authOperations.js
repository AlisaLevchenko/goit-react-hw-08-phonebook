import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  signupUserApi,
  loginUserApi,
  getCurrentUserApi,
  logoutUserApi,
} from '../../api/AuthApi';

export const signupUser = createAsyncThunk(
  'authSignup',
  async (userInfo, { rejectWithValue }) => {
    try {
      const postedUserInfo = await signupUserApi(userInfo);
      return postedUserInfo;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'authLogin',
  async (userInfo, { rejectWithValue }) => {
    try {
      const postedUserInfo = await loginUserApi(userInfo);
      return postedUserInfo;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'authCurrentUser',
  async (userInfo, { rejectWithValue }) => {
    try {
      const postedUserInfo = await getCurrentUserApi(userInfo);
      console.log(postedUserInfo);
      return postedUserInfo;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'authLogout',
  async (_, { rejectWithValue }) => {
    try {
      await logoutUserApi();
      return;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
