import { SAVE_FAVORITE } from './actions';

const initialState = { favoritesItems: [] };

export default function(state = initialState, action) {
  if (action) {
    if (action.type === SAVE_FAVORITE) {
      return {
        ...state,
        favoritesItems: [...state.favoritesItems, action.payload.favorite]
      };
    }
  }

  return state;
}
