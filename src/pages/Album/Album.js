import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import AlbumCard from '../Search/AlbumCard';
import MusicList from './MusicList';
import { getFavoriteSongs } from '../../services/favoriteSongsAPI';
import Loading from '../../components/Loading';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      artistName: '',
      collectionName: '',
      collectionId: 0,
      artworkUrl100: '',
      loading: false,
      favorites: [],
    };
    this.configAlbumCard = this.configAlbumCard.bind(this);
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

  configAlbumCard(data) {
    this.setState({
      artistName: data.artistName,
      collectionName: data.collectionName,
      collectionId: data.collectionId,
      artworkUrl100: data.artworkUrl100,
    });
  }

  render() {
    const { match } = this.props;
    const { id } = match.params;
    const {
      artistName,
      collectionName,
      collectionId,
      artworkUrl100,
      loading,
      favorites,
    } = this.state;

    return (
      <div data-testid="page-album">
        <Header />
        {loading ? (
          <Loading />
        ) : (
          <>
            {artistName.length > 0 && (
              <AlbumCard
                artistName={ artistName }
                collectionName={ collectionName }
                collectionId={ collectionId }
                artworkUrl100={ artworkUrl100 }
              />
            )}
            <MusicList
              id={ id }
              configAlbumCard={ this.configAlbumCard }
              favorites={ favorites }
            />
          </>
        )}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;
