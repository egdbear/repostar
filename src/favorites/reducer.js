import { SAVE_FAVORITE } from './actions';

const initialState = { favorites: [] };

export default function(state = initialState, action) {
  if (action) {
    if (action.type === SAVE_FAVORITE) {
      return {
        ...state,
        favorites: [...state.favorites, action.payload.favorite]
      };
    }
  }

  return state;
}
