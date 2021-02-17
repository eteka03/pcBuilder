import { GET_COMPOSANTS, SET_COMPOSANTS } from '../action.types';

export const getComposants = () => ({ type: GET_COMPOSANTS });

export const setComposants = data => ({ type: SET_COMPOSANTS, payload: data });
