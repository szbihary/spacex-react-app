import * as types from '../actions/actionTypes';

const initialState = { orbits: [], loading: false, error: '' };

export default function historyReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_ROCKETS_REQUEST:
      return { ...state, loading: true, error: '' };
    case types.LOAD_ROCKETS_SUCCESS: {
      const orbits = action.rockets.reduce(
        (list, rocket) =>
          list.concat(
            rocket.payload_weights.map((orbit) => ({
              id: orbit.id,
              name: orbit.name,
              rocket: rocket.rocket_id,
            })),
          ),
        [],
      );
      return {
        ...state,
        orbits,
        loading: false,
      };
    }
    case types.LOAD_ROCKETS_ERROR: {
      return { ...state, loading: false, error: action.error };
    }
    default:
      return state;
  }
}
