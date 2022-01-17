import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cardReducer from './gameCardReducer';
const rootReducer = combineReducers({
    card: cardReducer
  });
   const configureStore = () => {
    return createStore(
      rootReducer,
      compose(applyMiddleware(thunk))
    );
  }
export default configureStore;

