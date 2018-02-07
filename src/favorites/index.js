import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FAVORITES_URL } from '../config';

import Loader from '../loader';

class Favorites extends Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div>
        hello world
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    favorites: state.favorites
  }
};

const ConnectedFavorites = connect(mapStateToProps)(Favorites);

export default Loader(ConnectedFavorites, FAVORITES_URL);
