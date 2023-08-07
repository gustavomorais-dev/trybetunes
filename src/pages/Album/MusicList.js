import React from 'react';
import PropTypes from 'prop-types';
import getMusics from '../../services/musicsAPI';
import Loading from '../../components/Loading';
import MusicCard from './MusicCard/MusicCard';
import './MusicList.css';

class MusicList extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      musicList: [],
    };
    this.fetchMusics = this.fetchMusics.bind(this);
  }

  componentDidMount() {
    this.fetchMusics();
  }

  async fetchMusics() {
    const { id, configAlbumCard } = this.props;
    getMusics(id).then((response) => {
      this.setState({
        loading: false,
        musicList: response,
      }, configAlbumCard({
        artistName: response[0].artistName,
        collectionName: response[0].collectionName,
        collectionId: response[0].collectionId,
        artworkUrl100: response[0].artworkUrl100,
      }));
    }).catch((error) => {
      this.setState({ loading: false });
      console.log(error);
    });
  }

  render() {
    const { loading, musicList } = this.state;
    const { favorites } = this.props;
    let content;
    if (loading) {
      content = <Loading />;
    } else {
      content = (
        <ul className="music-list">
          {musicList.map((music, index) => (
            index !== 0 && (
              <li key={ music.trackId }>
                <MusicCard
                  music={ music }
                  isFavorite={
                    favorites.some((favorite) => favorite.trackId === music.trackId)
                  }
                  fetchMusics={ this.fetchMusics }
                />
              </li>
            )
          ))}
        </ul>
      );

      return (
        <div>
          {content}
        </div>
      );
    }
  }
}

MusicList.propTypes = {
  id: PropTypes.string.isRequired,
  configAlbumCard: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default MusicList;
