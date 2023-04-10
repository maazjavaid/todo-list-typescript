import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUserState } from "./types/redux";
import { IUser } from "./types/utils";

const initialState: IUserState = {
  data: null,
  loading: false,
  error: null,
  isAuth: localStorage.getItem("token") ? true : false,
  alert: {
    isOpen: false,
    message: null,
    severity: "success",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRequest: (state, action: PayloadAction<IUser>) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    loginSuccess: (state, action: PayloadAction<IUser>) => {
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
        isAuth: true,
        alert: {
          ...state.alert,
          isOpen: false,
        },
      };
    },
    loginFail: (state) => {
      return {
        ...state,
        loading: false,
        error: "Failed to Login",
        alert: {
          isOpen: true,
          message: "Failed to Login",
          severity: "error",
        },
      };
    },
    registerRequest: (state, action: PayloadAction<IUser>) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    registerSuccess: (state, action: PayloadAction<IUser>) => {
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
        alert: {
          isOpen: true,
          message: "Account created you can Login now",
          severity: "success",
        },
      };
    },
    registerFail: (state) => {
      return {
        ...state,
        loading: false,
        error: "Failed to Login",
        alert: {
          isOpen: true,
          message: "Failed to register",
          severity: "error",
        },
      };
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFail,
  registerRequest,
  registerSuccess,
  registerFail,
} = userSlice.actions;

export default userSlice.reducer;
