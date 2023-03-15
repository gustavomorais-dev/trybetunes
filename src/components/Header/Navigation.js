import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <Link
            to="/search"
            data-testid="link-to-search"
          >
            Search
          </Link>
        </li>
        <li>
          <Link
            to="/favorites"
            data-testid="link-to-favorites"
          >
            Favorites
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            data-testid="link-to-profile"
          >
            Profile
          </Link>
        </li>
      </ul>
    );
  }
}

export default Navigation;
