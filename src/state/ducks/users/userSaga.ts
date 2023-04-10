import { call, put, takeLatest } from "redux-saga/effects";
import {
  loginFail,
  loginRequest,
  loginSuccess,
  registerFail,
  registerRequest,
  registerSuccess,
} from "./userSlice";
import { AnyAction } from "@reduxjs/toolkit";
import { apiCallRequest } from "state/utils/apiCaller";
import { IUser } from "./types/utils";

function* loginUserSaga(action: AnyAction): Generator {
  try {
    const data: any = yield call(
      apiCallRequest,
      "/users/login",
      "POST",
      action.payload
    );
    if (!data.token) throw new Error(data.message ?? "Login Failed");
    localStorage.setItem("token", data.token ?? "");
    yield put(loginSuccess(data));
    // window.location.href = "/todos";
  } catch (error) {
    yield put(loginFail());
  }
}

function* registerUserSaga(action: AnyAction) {
  try {
    const data: any = (yield call(
      apiCallRequest,
      "/users/register",
      "POST",
      action.payload
    )) as IUser;
    yield put(registerSuccess(data));
  } catch (error) {
    yield put(registerFail());
  }
}

function* watchUser() {
  yield takeLatest(loginRequest, loginUserSaga);
  yield takeLatest(registerRequest, registerUserSaga);
}

export default watchUser;
