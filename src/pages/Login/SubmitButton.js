import React from 'react';
import PropTypes from 'prop-types';

class SubmitButton extends React.Component {
  render() {
    const { disabled, onClick } = this.props;
    return (
      <button
        data-testid="login-submit-button"
        disabled={ disabled }
        onClick={ onClick }
      >
        Entrar
      </button>
    );
  }
}

SubmitButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SubmitButton;
