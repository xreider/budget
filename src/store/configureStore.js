import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import entriesReducer from '../reducers/entries.reducer';
import modalsReducer from '../reducers/modals.reducer';
import createSagaMiddleware from 'redux-saga';
import { initSagas } from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const configureStore = () => {
  const store = createStore(
    combineReducers({
      entries: entriesReducer,
      modals: modalsReducer,
    }),
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  initSagas(sagaMiddleware);
  return store;
};
export default configureStore;
