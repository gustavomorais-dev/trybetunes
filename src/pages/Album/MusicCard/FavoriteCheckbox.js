import React from 'react';
import PropTypes from 'prop-types';

class FavoriteCheckbox extends React.Component {
  render() {
    const { trackId, checked, onChange } = this.props;
    return (
      <label>
        Favorita
        <input
          name="favoriteCheckbox"
          data-testid={ `checkbox-music-${trackId}` }
          type="checkbox"
          checked={ checked }
          onChange={ onChange }
        />
      </label>
    );
  }
}

FavoriteCheckbox.propTypes = {
  trackId: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FavoriteCheckbox;
