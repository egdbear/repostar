import React from 'react';
import FavoritesItem from './FavoritesItem';
import { getFavoritesProps } from './utils';

export default ({ favorites, onSave }) => {
  const items = favorites.map((favorite) => {
    return <FavoritesItem onSave={onSave} key={favorite.id} {...getFavoritesProps(favorite)} />;
  });

  return (
    <ol>
      {items}
    </ol>
  );
};
