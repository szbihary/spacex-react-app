import * as types from '../actions/actionTypes';

const initialState = { history: [], loading: false, error: '' };

export default function historyReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_HISTORY_LOADING:
      return { ...state, loading: true, error: '' };
    case types.LOAD_HISTORY_SUCCESS: {
      return {
        ...state,
        history: action.history.map((item) => ({
          title: item.title,
          description: item.details,
          date: item.event_date_utc,
          link: item.links.wikipedia || item.links.article || item.links.reddit,
        })),
        loading: false,
      };
    }
    case types.LOAD_HISTORY_ERROR: {
      return { ...state, loading: false, error: action.error };
    }
    default:
      return state;
  }
}