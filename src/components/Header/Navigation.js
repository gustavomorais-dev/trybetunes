// Navigation.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends React.Component {
  render() {
    return (
      <ul className="navigation">
        <li>
          <Link to="/search" data-testid="link-to-search">
            Pesquisa
          </Link>
        </li>
        <li>
          <Link to="/favorites" data-testid="link-to-favorites">
            Favoritas
          </Link>
        </li>
        <li>
          <Link to="/profile" data-testid="link-to-profile">
            Perfil
          </Link>
        </li>
      </ul>
    );
  }
}

export default Navigation;
