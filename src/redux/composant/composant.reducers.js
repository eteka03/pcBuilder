import { GET_COMPOSANTS, SET_COMPOSANTS } from '../action.types';

const initial_state = {
  composants: [],
};

export const composant_reducer = (state = initial_state, action) => {
  switch (action?.type) {
    case SET_COMPOSANTS:
      return { ...state, composants: action?.payload };

    default:
      return state;
  }
};
