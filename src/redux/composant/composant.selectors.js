import { createSelector } from 'reselect';
import memoize from 'lodash/memoize';
const composantSelector = state => state.composant;

export const selectComposants = createSelector(
  [composantSelector],
  composant => composant.composants
);

export const selectComposant = memoize(id =>
  createSelector([selectComposants], composants => {
    return composants.find(composant => id === composant.id.toString());
  })
);
