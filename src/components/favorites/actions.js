export const SAVE_FAVORITE = 'FAVORITES__SAVE_FAVORITE';

export function saveFavorite(favorite)  {
  return { type: SAVE_FAVORITE, payload: { favorite } };
}
