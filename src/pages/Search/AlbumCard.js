import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './AlbumCard.css';

class AlbumCard extends React.Component {
  render() {
    const { artistName, collectionName, collectionId, artworkUrl100 } = this.props;
    return (
      <div className="album-card-container">
        <Link
          to={ `/album/${collectionId}` }
          data-testid={ `link-to-album-${collectionId}` }
        >
          <div className="album-card-content">
            <img
              src={ artworkUrl100 }
              alt={ collectionName }
            />
            <div className="album-content">
              <span data-testid="album-name" className="album-name">
                { collectionName }
              </span>
              <span data-testid="album-artist-name" className="artist-name">
                { artistName }
              </span>
            </div>
          </div>
        </Link>
      </div>
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
