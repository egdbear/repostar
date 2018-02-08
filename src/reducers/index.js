import favoritesReducer from '../components/favorites/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  favorites: favoritesReducer
});
