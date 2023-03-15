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
            Pesquisa
          </Link>
        </li>
        <li>
          <Link
            to="/favorites"
            data-testid="link-to-favorites"
          >
            Favoritas
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            data-testid="link-to-profile"
          >
            Perfil
          </Link>
        </li>
      </ul>
    );
  }
}

export default Navigation;
