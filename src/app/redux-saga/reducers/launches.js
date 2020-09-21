import * as types from '../actions/actionTypes';

const initialState = {
  list: [],
  loading: false,
  error: '',
  nameFilterText: '',
  fromDateFilter: '',
  toDateFilter: '',
  orbitFilter: 'all',
};

export default function launchesReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_LAUNCHES_REQUEST:
      return { ...state, loading: true, error: '' };
    case types.LOAD_LAUNCHES_SUCCESS: {
      return {
        ...state,
        list: action.launches.map((item) => {
          const {
            nationality,
            manufacturer,
            payload_type: type,
          } = item.rocket.second_stage.payloads[0];
          return {
            id: item.flight_number,
            missionName: item.mission_name,
            missionDate: item.launch_date_utc,
            rocketId: item.rocket.rocket_id,
            payload: {
              nationality,
              manufacturer,
              type,
            },
          };
        }),
        loading: false,
      };
    }
    case types.LOAD_LAUNCHES_ERROR: {
      return { ...state, loading: false, error: action.error };
    }
    case types.FILTER_MISSION_NAME: {
      return { ...state, nameFilterText: action.value };
    }
    case types.FILTER_MISSION_DATE_FROM: {
      return { ...state, fromDateFilter: action.value };
    }
    case types.FILTER_MISSION_DATE_TO: {
      return { ...state, toDateFilter: action.value };
    }
    case types.FILTER_ORBIT: {
      return { ...state, orbitFilter: action.value };
    }
    default:
      return state;
  }
}
