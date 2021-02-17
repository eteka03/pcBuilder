import { createSelector } from 'reselect';

const composantSelector = state => state.composant;

export const selectComposants = createSelector(
  [composantSelector],
  composant => composant.composants
);
