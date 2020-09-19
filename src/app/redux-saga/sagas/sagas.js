import { put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import * as actions from '../actions/actionCreators';
import * as Api from '../../api';

function* fetchHistory() {
  try {
    const history = yield Api.fetchHistoryData();
    yield put(actions.loadHistorySuccess(history));
  } catch (e) {
    yield put(actions.loadHistoryError(e.message));
  }
}

export function* watchLoadHistorySaga() {
  yield takeLatest(types.LOAD_HISTORY_LOADING, fetchHistory);
}
