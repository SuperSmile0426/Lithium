//node_modules
import { all, takeLatest } from "redux-saga/effects";

//sagas
import { SignInSaga, SignUpSaga, GetMeSaga } from "../sagas/user.saga";

//slices
import { SignIn, SignUp, GetMe } from "../slices/user.slice";

//sagas
function* rootSaga() {
  yield all([takeLatest(SignIn.type, SignInSaga)]);
  yield all([takeLatest(SignUp.type, SignUpSaga)]);
  yield all([takeLatest(GetMe.type, GetMeSaga)]);
}

export default rootSaga;
