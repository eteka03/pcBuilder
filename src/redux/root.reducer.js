import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { composant_reducer } from './composant/composant.reducers';

//pour faire persister les données dans le browser
const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  composant: composant_reducer,
});

export default persistReducer(persistConfig, rootReducer);
