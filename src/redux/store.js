import { applyMiddleware, createStore } from 'redux';
import rootReducer from './root.reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import persistStore from 'redux-persist/es/persistStore';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

//afin de faire persister le store
const persist_store = persistStore(store);

export { store, persist_store };
