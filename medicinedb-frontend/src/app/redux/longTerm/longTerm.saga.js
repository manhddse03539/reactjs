import { all, call, put, takeLatest } from 'redux-saga/effects';

import { deleteApi } from './longTerm.api';
import { anElementAction, deleteSuccess, deleteFailed } from './longTerm.slice';

export function* deleteSaga(data) {
  try {
    const { payload } = data;
    const response = yield call(() => deleteApi(payload));
    if (response.data.success) {
      yield put(deleteSuccess('削除しました。'));
    }
  } catch (e) {
    yield put(deleteFailed('削除できません。エラーが発生しました。'));
  }
}

// watcher
function* actionWatcher() {
  yield takeLatest(anElementAction.type, deleteSaga);
}

// combine sagas
export default function* longTermSaga() {
  yield all([actionWatcher()]);
}
