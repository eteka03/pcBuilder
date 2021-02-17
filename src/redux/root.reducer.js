import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { cart_reducer } from './cart/cart.reducers';
import { composant_reducer } from './composant/composant.reducers';

//pour faire persister les données dans le browser
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  composant: composant_reducer,
  cart: cart_reducer,
});

export default persistReducer(persistConfig, rootReducer);
