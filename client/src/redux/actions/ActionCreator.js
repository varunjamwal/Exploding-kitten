import * as types from '../actionTypes';
import { startGame } from './startGameAction';
import configureStore from '../store';

const store = configureStore();

const removeCard = cardArray => {
  cardArray.pop();
  return { type: types.REMOVE_CARD, payload: { cardArray } };
};
const flippedCard = cardFlipped =>({ type: types.FLIPPED_CARD, payload: { cardFlipped } });
const defuseCard = (defuseCards, status) =>  ({ type: types.DEFUSE_CARD, payload: { defuseCards, status } });
const catCard = () => ({ type: types.CAT_CARD });
const shuffleCard = () =>({ type: types.SHUFFLE_CARD });
const gameOver = () => ({ type: types.GAME_OVER });
const gameResult = () => ({ type: types.GAME_WON });
export const addUser = (user) =>({ type: types.ADD_USER, payload: { user } });

export const flipCard = () => (dispatch, getState) => {
  const { cardArray, defuseCards } = getState().card;
  const card = cardArray[cardArray.length - 1];
  dispatch(flippedCard(card));
  if (card === 'Cat card') dispatch(catCard());
  if (card === 'Defuse card') dispatch(defuseCard(defuseCards + 1, 'Added Defuse Card'));
  if (card === 'Exploding kitten card') {
    if (defuseCards !== 0) dispatch(defuseCard(defuseCards - 1, 'Defuse Card Used'));
    else {
      dispatch(gameOver());
      setTimeout(() => dispatch(startGame()), 2000);
    }
  }
  if (card === 'Shuffle card') {
    dispatch(shuffleCard());
    setTimeout(() => dispatch(startGame()), 1300);
  }
  if (cardArray.length === 0) {
    dispatch(gameResult());
    setTimeout(() => dispatch(startGame()), 3000);
  }
  dispatch(removeCard(cardArray));
};