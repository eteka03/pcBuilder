import {
  ADD_ITEM,
  REMOVE_ITEM,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
} from '../action.types';

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = item => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const decreaseQuantity = item => ({
  type: DECREASE_QUANTITY,
  payload: item,
});

export const increaseQuantity = item => ({
  type: INCREASE_QUANTITY,
  payload: item,
});
