import React from 'react';
import PropTypes from 'prop-types';

class NameInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <input
        name="nameInput"
        type="text"
        data-testid="login-name-input"
        value={ value }
        onChange={ onChange }
      />
    );
  }
}

NameInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NameInput;
