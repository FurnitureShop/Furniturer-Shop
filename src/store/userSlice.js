import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ENP_CHANGE_USER_PASSWORD,
  ENP_LOGIN,
  ENP_UPDATE_USER_INFO,
} from "api/EndPoint";
import { axios } from "lib/axios/Interceptor";
import { useDispatch } from "react-redux";
import LocalStorageService from "services/LocalStorage";
import { getAllProduct } from "./productSlice";

export const login = createAsyncThunk(
  "auth/login",
  async (data, thunkParam) => {
    const response = await axios.post(ENP_LOGIN, data);

    LocalStorageService.setAuthToken(response.data.accessToken);
    LocalStorageService.setRefreshToken(response.data.refreshToken);

    return response.data;
  }
);

export const updateInfo = createAsyncThunk(
  "user/updateInfo",
  async (data, thunkParam) => {
    const response = await axios.put(ENP_UPDATE_USER_INFO, data);

    return response.data;
  }
);

export const changePassword = createAsyncThunk(
  "user/changePassword",
  async (data, thunkParam) => {
    const response = await axios.put(ENP_CHANGE_USER_PASSWORD, data);

    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    curUser: null,
    isLoading: false,
    isError: false,
  },
  reducers: {
    logout: (state) => {
      LocalStorageService.clearToken("auth");
      LocalStorageService.clearToken("refresh");
      state.curUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.curUser = action.payload.user;
        state.isLoading = false;
      })
      .addCase(updateInfo.fulfilled, (state, action) => {
        state.curUser = action.payload.user;
        state.isLoading = false;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.isError = false;
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state) => {
          state.isLoading = false;
          state.isError = true;
        }
      );
  },
});

export const selectUser = (state) => state.user.curUser;
export const selectLoading = (state) => state.user.isLoading;
export const selectError = (state) => state.user.isError;

export const { logout } = userSlice.actions;

export default userSlice.reducer;
