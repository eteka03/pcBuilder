export const addItemToCart = (cartItems, itemToAdd) => {
  //voir si item est deja dans le panier

  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === itemToAdd.id
  );

  //si item existe augmenter quantité
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //dans le cas contraire
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, item) => {
  return cartItems.filter(cartItem => cartItem.id !== item.id);
};

export const decreaseItemQuantity = (cartItems, item) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === item.id);

  if (existingCartItem) {
    if (existingCartItem.quantity === 1) {
      return cartItems.filter(cartItem => cartItem.id !== existingCartItem.id);
    } else {
      return cartItems.map(cartItem =>
        cartItem.id === existingCartItem.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    }
  }
};

export const increaseItemQuantity = (cartItems, item) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === item.id);

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === existingCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
};
