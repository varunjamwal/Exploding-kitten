import * as types from '../actionTypes';
import makeCard from '../genCard';

export const startGame = () => dispatch => {
  dispatch({ type: types.START_GAME, payload: makeCard() });
};
