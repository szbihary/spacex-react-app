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
