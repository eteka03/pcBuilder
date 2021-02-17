import { createStore } from 'redux';
import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createStore(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (total_quantity, cartItem) => total_quantity + cartItem.quantity,
      0
    )
);

export const selectCarTotal = createSelector([selectCartItems], cartItems => {
  return cartItems.reduce(
    (total_quantity, cartItem) =>
      total_quantity + cartItem.quantity * cartItem.price,
    0
  );
});
