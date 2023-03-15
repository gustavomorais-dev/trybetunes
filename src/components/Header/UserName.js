import React from 'react';
import PropTypes from 'prop-types';

class UserName extends React.Component {
  render() {
    const { userName } = this.props;
    return (
      <span data-testid="header-user-name">
        { userName }
      </span>
    );
  }
}

UserName.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default UserName;
