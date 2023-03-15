import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AlbumCard extends React.Component {
  render() {
    const { artistName, collectionName, collectionId, artworkUrl100 } = this.props;
    return (
      <Link
        to={ `/album/${collectionId}` }
        data-testid={ `link-to-album-${collectionId}` }
      >
        <div>
          <img src={ artworkUrl100 } alt={ collectionName } />
          <span data-testid="album-name">{ collectionName }</span>
          <span data-testid="artist-name">{ artistName }</span>
        </div>
      </Link>
    );
  }
}

AlbumCard.propTypes = {
  artistName: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  collectionId: PropTypes.number.isRequired,
  artworkUrl100: PropTypes.string.isRequired,
};

export default AlbumCard;
