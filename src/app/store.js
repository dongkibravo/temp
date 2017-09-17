import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/index';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

export default createStore(
  rootReducer,
  {},
  applyMiddleware(createLogger(), thunk, promise())
);