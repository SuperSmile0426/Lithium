// import node_modules
import { call, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

// import models
import IUser from "../../models/user.model";

// import apis
import userApi from "../../apis/user.api";

// import slices
import {
  SignInSuccess,
  SignInFailure,
  SignUpSuccess,
  SignUpFailure,
  GetMeSuccess,
  GetMeFailure
} from "../slices/user.slice";

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export function* SignInSaga(action: PayloadAction<{ signInfo: IUser, next: Function }>) {
  try {
    let result: ResponseGenerator = yield call(userApi.signIn, action.payload.signInfo);

    if (result.data) {
      yield put(SignInSuccess({ token: result.data.token }));
      action.payload.next();
      return;
    }
    yield put(SignInFailure({ error: "There isn't any response data from backend." }));

  } catch (error: any) {
    if (error.response) {
      console.log(error.response.data.message);
      yield put(SignInFailure({ error: error.response.data.message }));
    } else {
      console.log(error.response)
      yield put(SignInFailure({ error: "Network connection error" }));
    }
  }
}

export function* SignUpSaga(action: PayloadAction<{ user: IUser, next: Function }>) {
  try {
    let result: ResponseGenerator = yield call(userApi.signUp, action.payload.user);
    if (result.data) {
      console.log(result.data)
      yield put(SignUpSuccess({}));
      action.payload.next();
      return;
    }
    yield put(SignUpFailure({ error: "There isn't any response data from backend." }));

  } catch (error: any) {
    if (error.response) {
      yield put(SignUpFailure({ error: error.response.data.message }));
    } else {
      console.log(error.response)
      yield put(SignUpFailure({ error: "Network connection error" }));
    }
  }
}


export function* GetMeSaga(action: PayloadAction<{ next: Function }>) {
  try {
    let result: ResponseGenerator = yield call(userApi.getMe);
    if (result.data) {
      yield put(GetMeSuccess({ email: result.data.me.email, users: result.data.users }));
      action.payload.next();
      return;
    }
    yield put(SignUpFailure({ error: "There isn't any response data from backend." }));

  } catch (error: any) {
    // if (error.response) {
    yield put(GetMeFailure({ error: "" }));
    // } else {
    //   console.log(error.response)
    //   yield put(GetMeFailure({ error: "Network connection error" }));
    // }
  }
}
