import * as types from './actionTypes';

export function loadHistory() {
  return { type: types.LOAD_HISTORY_REQUEST };
}

export function loadHistorySuccess(history) {
  return { type: types.LOAD_HISTORY_SUCCESS, history };
}

export function loadHistoryError(error) {
  return { type: types.LOAD_HISTORY_ERROR, error };
}

export function loadLaunches() {
  return { type: types.LOAD_LAUNCHES_REQUEST };
}

export function loadLaunchesSuccess(launches) {
  return { type: types.LOAD_LAUNCHES_SUCCESS, launches };
}

export function loadLaunchesError(error) {
  return { type: types.LOAD_LAUNCHES_ERROR, error };
}

export function setNameFilter(value) {
  return { type: types.FILTER_MISSION_NAME, value };
}

export function setFromDateFilter(value) {
  return { type: types.FILTER_MISSION_DATE_FROM, value };
}

export function setToDateFilter(value) {
  return { type: types.FILTER_MISSION_DATE_TO, value };
}
