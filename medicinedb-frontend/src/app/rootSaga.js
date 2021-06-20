import { all } from 'redux-saga/effects';

// sagas
import usersSaga from './redux/users/users.saga';
import authSaga from './redux/auth/auth.saga';
import longTermSaga from './redux/longTerm/longTerm.saga';

export default function* rootSaga() {
  yield all([usersSaga(), authSaga(), longTermSaga()]);
}
