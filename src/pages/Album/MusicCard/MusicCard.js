import React from 'react';
import PropTypes from 'prop-types';
import FavoriteCheckbox from './FavoriteCheckbox';
import Loading from '../../../components/Loading';
import { addSong, removeSong } from '../../../services/favoriteSongsAPI';
import './MusicCard.css';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      favorite: false,
      loading: false,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange({ target }) {
    const { music, fetchFavorites, fetchMusics } = this.props;
    const value = target.checked;

    this.setState({
      loading: true,
    });
    if (value) {
      addSong(music)
        .then(() => {
          this.setState({
            favorite: true,
            loading: false,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      removeSong(music)
        .then(() => {
          this.setState({
            favorite: false,
            loading: false,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (fetchFavorites) fetchFavorites();
    if (fetchMusics) fetchMusics();
  }

  render() {
    const { music, isFavorite } = this.props;
    const { trackName, previewUrl, trackId } = music;
    const { favorite, loading } = this.state;
    return (
      <div className="music-card-container">
        <div className="favorite">
          <FavoriteCheckbox
            trackId={ trackId }
            checked={ isFavorite ? true : favorite }
            onChange={ this.onChange }
          />
        </div>
        <div className="music-card-content">
          <span className="music-name">{trackName}</span>
          <div className="container-audio">
            <audio data-testid="audio-component" src={ previewUrl } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              <code>audio</code>
            </audio>
          </div>
          { loading && <Loading /> }
        </div>
      </div>
    );
  }
}

MusicCard.propTypes = {
  music: PropTypes.shape({
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
  }).isRequired,
  isFavorite: PropTypes.bool.isRequired,
  fetchFavorites: PropTypes.func,
  fetchMusics: PropTypes.func,
};

MusicCard.defaultProps = {
  fetchFavorites: () => {},
  fetchMusics: () => {},
};

export default MusicCard;
