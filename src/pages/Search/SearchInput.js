import React from 'react';
import PropTypes from 'prop-types';

class SearchInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <input
        name="searchInput"
        type="text"
        data-testid="search-artist-input"
        value={ value }
        onChange={ onChange }
      />
    );
  }
}

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchInput;
