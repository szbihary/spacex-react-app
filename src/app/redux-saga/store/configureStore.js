import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/appReducer';
import { watchLoadHistorySaga } from '../sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState) {
  const middleware = [sagaMiddleware];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware)),
  );
  sagaMiddleware.run(watchLoadHistorySaga);
  return store;
}

export default configureStore;
