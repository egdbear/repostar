import favoritesReducer from '../favorites/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  favorites: favoritesReducer
});
