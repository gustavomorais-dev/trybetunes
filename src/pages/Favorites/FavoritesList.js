import React from 'react';
import PropTypes from 'prop-types';
import MusicCard from '../Album/MusicCard/MusicCard';
import './FavoritesList.css';

class FavoritesList extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      musicList: [],
    };
  }

  render() {
    const { childState } = this.state;
    const { favorites, fetchFavorites } = this.props;

    let content;

    if (favorites.length > 0) {
      content = favorites.map((music, index) => (
        <li key={ index }>
          <MusicCard
            music={ music }
            isFavorite={ true }
            updateDad={ this.handleChildStateChange }
            childState={ childState }
            fetchFavorites={ fetchFavorites }
          />
        </li>
      ))
    } else {
      content = <p>Você ainda não adicionou músicas favoritas.</p>
    }

    return (
      <div className="favorites-content">
        <ul className="favorites-list">
          {content}
        </ul>
      </div>
    );
  }
}

FavoritesList.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default FavoritesList;
