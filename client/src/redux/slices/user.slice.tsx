import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type errorType = {
  message: string
}

type meType = {
  email: string
}

type initialStateType = {
  token: string,
  creatingUser: boolean,
  createdUser: boolean,
  verifyingUser: boolean,
  verifiedUser: boolean,
  gettingMe: boolean,
  gotteMe: boolean,
  me: meType,
  users: any[],
  error: errorType;
}

const initialState: initialStateType = {
  token: "",
  creatingUser: false,
  createdUser: false,
  verifyingUser: false,
  verifiedUser: false,
  gettingMe: false,
  gotteMe: false,
  me: { email: "" },
  users: [],
  error: { message: "" }
}


const UserSlice = createSlice({
  name: "User",
  initialState: initialState,
  reducers: {
    /**
     * SignIn
     */
    SignIn(state: initialStateType, action: PayloadAction<{}>) {
      state.verifyingUser = true;
      state.verifiedUser = false;
    },

    SignInSuccess(state: initialStateType, action: PayloadAction<{ token: string }>) {
      state.verifyingUser = false;
      state.verifiedUser = true;
      state.token = action.payload.token;
      window.localStorage.setItem("token", state.token);
    },

    SignInFailure(state: initialStateType, action: PayloadAction<{ error: string }>) {
      state.verifyingUser = false;
      state.verifiedUser = false;
      console.log("action.payload.error;", action.payload.error);

      state.error.message = action.payload.error;
    },

    /**
     * SignUp
     */
    SignUp(state: initialStateType, action: PayloadAction<{}>) {
      state.creatingUser = true;
      state.createdUser = false;
    },

    SignUpSuccess(state: initialStateType, action: PayloadAction<{}>) {
      state.creatingUser = false;
      state.createdUser = true;
    },

    SignUpFailure(state: initialStateType, action: PayloadAction<{ error: string }>) {
      state.creatingUser = false;
      state.createdUser = false;
      state.error.message = action.payload.error;
    },

    /**
     * GetMe
     */
    GetMe(state: initialStateType, action: PayloadAction<{}>) {
      state.gettingMe = true;
      state.gotteMe = false;
    },

    GetMeSuccess(state: initialStateType, action: PayloadAction<{ email: string, users: any }>) {
      state.gettingMe = false;
      state.gotteMe = true;
      state.me.email = action.payload.email;
      state.users = action.payload.users;
    },

    GetMeFailure(state: initialStateType, action: PayloadAction<{ error: string }>) {
      state.gettingMe = false;
      state.gotteMe = false;
      state.error.message = action.payload.error;
    },

    Logout(state: initialStateType, action: PayloadAction<{ next: Function }>) {
      state.me.email = "";
      state.error.message = "";
      window.localStorage.removeItem("token");
      action.payload.next();
    },

    formatError(state: initialStateType, action: PayloadAction<{}>) {
      state.error.message = "";
    }
  },
});

export const {
  SignIn,
  SignInSuccess,
  SignInFailure,
  SignUp,
  SignUpSuccess,
  SignUpFailure,

  GetMe,
  GetMeSuccess,
  GetMeFailure,

  Logout,
  formatError
} = UserSlice.actions;

export default UserSlice.reducer;
