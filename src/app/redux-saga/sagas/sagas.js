import { put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import * as actions from '../actions/actionCreators';
import * as Api from '../../api';

function* fetchHistory() {
  try {
    const history = yield Api.fetchHistory();
    yield put(actions.loadHistorySuccess(history));
  } catch (e) {
    yield put(actions.loadHistoryError(e.message));
  }
}

function* fetchLaunches() {
  try {
    const history = yield Api.fetchLaunches();
    yield put(actions.loadLaunchesSuccess(history));
  } catch (e) {
    yield put(actions.loadLaunchesError(e.message));
  }
}

function* fetchRockets() {
  try {
    const history = yield Api.fetchRockets();
    yield put(actions.loadRocketsSuccess(history));
  } catch (e) {
    yield put(actions.loadRocketsError(e.message));
  }
}

export default function* rootSaga() {
  yield takeLatest(types.LOAD_HISTORY_REQUEST, fetchHistory);
  yield takeLatest(types.LOAD_LAUNCHES_REQUEST, fetchLaunches);
  yield takeLatest(types.LOAD_ROCKETS_REQUEST, fetchRockets);
}
