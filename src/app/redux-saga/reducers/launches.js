import * as types from '../actions/actionTypes';

const initialState = { list: [], loading: false, error: '' };

export default function launchesReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_LAUNCHES_LOADING:
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
    default:
      return state;
  }
}
