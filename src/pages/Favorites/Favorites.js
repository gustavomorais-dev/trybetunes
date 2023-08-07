import React from 'react';
import Header from '../../components/Header/Header';
import './Favorites.css';
import { getFavoriteSongs } from '../../services/favoriteSongsAPI';
import FavoritesList from './FavoritesList';
import Loading from '../../components/Loading';

class Favorites extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      favorites: [],
    };
    this.fetchFavorites = this.fetchFavorites.bind(this);
  }

  componentDidMount() {
    this.fetchFavorites();
  }

  async fetchFavorites() {
    this.setState(
      { loading: true },
      async () => {
        const requestReturn = await getFavoriteSongs();
        this.setState({
          loading: false,
          favorites: requestReturn,
        });
      },
    );
  }

  render() {
    const { favorites, loading } = this.state;

    return (
      <div data-testid="page-favorites" className="main">
        <Header />
        <div className="favorites-container">
          { loading ? (
            <Loading />
          ) : (
            <FavoritesList
              favorites={ favorites }
              fetchFavorites={ this.fetchFavorites }
            />
          )}
        </div>
      </div>
    );
  }
}

export default Favorites;
