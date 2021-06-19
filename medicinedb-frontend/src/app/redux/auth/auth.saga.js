import { all, call, put, takeLatest } from 'redux-saga/effects';
import { authService } from '~/services/AuthService';

import { loginApi, logoutApi } from './auth.api';
import { loginPending, loginSucceeded, loginFailed, logout, logoutFailed } from './auth.slice';

export function* loginSaga(data) {
  try {
    const { payload } = data;
    const response = yield call(() => loginApi(payload));
    if (response.data.success) {
      yield put(loginSucceeded());
      authService.login({ name: response.data.data.name, email: response.data.data.email });
    }
  } catch (e) {
    yield put(loginFailed({ message: 'ログイン用の認証情報が正しくありません。再度お試しください。' }));
  }
}

export function* logoutSaga() {
  try {
    yield call(logoutApi);
    authService.logout();
  } catch (e) {
    yield put(logoutFailed());
  }
}

// watcher
function* actionWatcher() {
  yield takeLatest(loginPending.type, loginSaga);
  yield takeLatest(logout.type, logoutSaga);
}

// combine sagas
export default function* authSaga() {
  yield all([actionWatcher()]);
}
