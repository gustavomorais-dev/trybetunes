import React from 'react';
import PropTypes from 'prop-types';

class SearchButton extends React.Component {
  render() {
    const { disabled, onClick } = this.props;
    return (
      <button
        data-testid="search-artist-button"
        disabled={ disabled }
        onClick={ onClick }
      >
        Pesquisar
      </button>
    );
  }
}

SearchButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchButton;
