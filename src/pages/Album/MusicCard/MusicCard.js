import React from 'react';
import PropTypes from 'prop-types';
import FavoriteCheckbox from './FavoriteCheckbox';
import Loading from '../../../components/Loading';
import { addSong } from '../../../services/favoriteSongsAPI';

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
    const { music } = this.props;
    const value = target.checked;
    this.setState({
      loading: true,
    });
    addSong(music).then(() => {
      this.setState({
        favorite: value,
        loading: false,
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { music, isFavorite } = this.props;
    const { trackName, previewUrl, trackId } = music;
    const { favorite, loading } = this.state;
    return (
      <div>
        <p>{trackName}</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
        <FavoriteCheckbox
          trackId={ trackId }
          checked={ isFavorite ? true : favorite }
          onChange={ this.onChange }
        />
        { loading && <Loading /> }
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
};

export default MusicCard;
