import React from 'react';
import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';

class FavoriteCheckbox extends React.Component {
  render() {
    const { trackId, checked, onChange } = this.props;
    return (
      <label>
        <input
          name="favoriteCheckbox"
          data-testid={ `checkbox-music-${trackId}` }
          type="checkbox"
          checked={ checked }
          onChange={ onChange }
          style={ { display: 'none' } }
          onKeyDown={ (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onChange();
            }
          } }
        />
        <div
          role="button"
          tabIndex={ 0 }
          style={ {
            display: 'inline-block',
            cursor: 'pointer',
            color: checked ? 'red' : 'white',
            fontSize: '5vh',
          } }
          onClick={ onChange }
          onKeyDown={ (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onChange();
            }
          } }
        >
          <FaHeart />
        </div>

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
