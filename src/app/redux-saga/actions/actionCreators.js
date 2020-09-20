import * as types from './actionTypes';

export function loadHistory() {
  return { type: types.LOAD_HISTORY_LOADING };
}

export function loadHistorySuccess(history) {
  return { type: types.LOAD_HISTORY_SUCCESS, history };
}

export function loadHistoryError(error) {
  return { type: types.LOAD_HISTORY_ERROR, error };
}

export function loadLaunches() {
  return { type: types.LOAD_LAUNCHES_LOADING };
}

export function loadLaunchesSuccess(launches) {
  return { type: types.LOAD_LAUNCHES_SUCCESS, launches };
}

export function loadLaunchesError(error) {
  return { type: types.LOAD_LAUNCHES_ERROR, error };
}
