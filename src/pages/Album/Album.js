import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import AlbumCard from '../Search/AlbumCard';
import MusicList from './MusicList';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      artistName: '',
      collectionName: '',
      collectionId: 0,
      artworkUrl100: '',
    };
    this.configAlbumCard = this.configAlbumCard.bind(this);
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
    const { artistName, collectionName, collectionId, artworkUrl100 } = this.state;

    return (
      <div data-testid="page-album">
        <Header />
        {artistName.length > 0 && (
          <AlbumCard
            artistName={ artistName }
            collectionName={ collectionName }
            collectionId={ collectionId }
            artworkUrl100={ artworkUrl100 }
          />
        )}
        <MusicList id={ id } configAlbumCard={ this.configAlbumCard } />
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
