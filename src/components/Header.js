import React from 'react';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';

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
      <header data-testid="header-component">
        {loading ? (
          <Loading />
        ) : (
          <span data-testid="header-user-name">
            { name }
          </span>
        )}
      </header>
    );
  }
}

export default Header;
