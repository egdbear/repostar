const getFavoritesProps = (favorite) =>
(({ id, full_name, description, stargazers_count, starred }) =>
({ id, full_name, description, stargazers_count, starred }))(favorite);

const filterFavorites = (items, favorites) => {
  let merged = [];

  items.forEach((item, index) => {
    if (favorites[index]) {
      if (item.id === favorites[index].id) {
        return merged[index] = Object.assign({}, item, { starred: true });
      }
    }

    return merged[index] = item;
  });

  return merged;
}

export {
  getFavoritesProps,
  filterFavorites
};
