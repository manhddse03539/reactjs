import { all } from 'redux-saga/effects';

// sagas
import usersSaga from './redux/users/users.saga';
import authSaga from './redux/auth/auth.saga';

export default function* rootSaga() {
  yield all([usersSaga(), authSaga()]);
}
