import React from 'react';
import Loading from '../Loading';
import { getUser } from '../../services/userAPI';
import Navigation from './Navigation';
import UserName from './UserName';
import './Header.css';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchName();
  }

  async fetchName() {
    this.setState(
      { loading: true },
      async () => {
        const requestReturn = await getUser();
        this.setState({
          name: requestReturn.name,
          loading: false,
        });
      },
    );
  }

  render() {
    const { name, loading } = this.state;
    return (
      <header data-testid="header-component" id="header-nav">
        <Navigation />

        {loading ? (
          <Loading />
        ) : (
          <UserName userName={ ` (${name})` } />
        )}

      </header>
    );
  }
}

export default Header;
