import React from 'react';
import PropTypes from 'prop-types';
import AlbumCard from './AlbumCard';
import './AlbumsList.css';

class AlbumsList extends React.Component {
  render() {
    const { albumsList } = this.props;

    return (
      <div id="albums-list-container">
        { albumsList.length > 0 && (
          <ul>
            {
              albumsList.map((album, index) => (
                <li key={ index }>
                  <AlbumCard
                    artistName={ album.artistName }
                    collectionName={ album.collectionName }
                    collectionId={ album.collectionId }
                    artworkUrl100={ album.artworkUrl100 }
                  />
                </li>
              ))
            }
          </ul>
        )}
      </div>
    );
  }
}

AlbumsList.propTypes = {
  albumsList: PropTypes.arrayOf(
    PropTypes.shape({
      artistId: PropTypes.number.isRequired,
      artistName: PropTypes.string.isRequired,
      collectionId: PropTypes.number.isRequired,
      collectionName: PropTypes.string.isRequired,
      collectionPrice: PropTypes.number.isRequired,
      artworkUrl100: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
      trackCount: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default AlbumsList;
