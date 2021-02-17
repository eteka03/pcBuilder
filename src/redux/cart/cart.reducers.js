import {
  ADD_ITEM,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_ITEM,
} from './cart.actions';
import {
  addItemToCart,
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItemFromCart,
} from './cart.utils';

const initial_state = {
  cartItems: [],
};

export const cart_reducer = (state = initial_state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action?.payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action?.payload),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: decreaseItemQuantity(state.cartItems, action?.payload),
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: increaseItemQuantity(state.cartItems, action?.payload),
      };
    default:
      return state;
  }
};
