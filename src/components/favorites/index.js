import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FAVORITES_URL } from '../../config';
import FavoritesList from './FavoritesList';
import { saveFavorite } from './actions';
import { filterFavorites } from './utils';
import Loader from '../../loader';
import './styles.css';

class Repositories extends Component {
  render() {
    const { data: { items }, saveFavorite, favorites } = this.props;
    const filteredFavorites = filterFavorites(items, favorites);
    return <FavoritesList favorites={filteredFavorites} onSave={saveFavorite} />;
  }
}

const Favorites = ({ favorites }) => {
  return (
    <FavoritesList favorites={favorites} />
  );
}

const mapStateToProps = state => {
  return {
    favorites: state.favorites.favoritesItems
  };
};

const mapDispatchToProps =   dispatch => ({
  ...bindActionCreators({ saveFavorite }, dispatch),
});

const ConnectedRepositories = connect(mapStateToProps, mapDispatchToProps)(Repositories);
const ConnectedFavorites = connect(mapStateToProps)(Favorites);
const withFavoritesLoader = Loader(ConnectedRepositories, FAVORITES_URL);

export {
  withFavoritesLoader as Repositories,
  ConnectedFavorites as Favorites
};
