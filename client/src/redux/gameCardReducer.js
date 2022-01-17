import * as types from './actionTypes';

const initialState = { cardArray: [], cardFlipped: 'Exploding kitten game', defuseCards: 0, status: '',user: '' };

const gameCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_GAME:
      return { ...state, cardArray: action.payload, cardFlipped: 'Exploding kitten game', defuseCards: 0, status: 'Cards Added to deck' };
    case types.FLIPPED_CARD:
      const { cardFlipped } = action.payload;
      return { ...state, cardFlipped };
    case types.REMOVE_CARD:
      const { cardArray } = action.payload;
      return { ...state, cardArray };
    case types.DEFUSE_CARD:
      const { defuseCards, status } = action.payload;
      return { ...state, defuseCards, status };
    case types.CAT_CARD:
      return { ...state, status: 'Safe' };
    case types.SHUFFLE_CARD:
      return { ...state, status: 'Reshuffling cards' };
    case types.GAME_OVER:
      return { ...state, status: 'You LOSE ! Restarting ...' };
    case types.GAME_WON:
      return { ...state, status: 'You WON ! Adding your score to leaderboard and Restarting !' };
    case types.ADD_USER:
      return {...state,user: action.payload.user}
    default:
      return state;
  }
};

export default gameCardReducer;
