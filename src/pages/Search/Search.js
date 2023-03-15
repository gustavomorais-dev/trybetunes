import React from 'react';
import Header from '../../components/Header/Header';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      searchInput: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    console.log('search');
    // const { searchInput } = this.state;
    // this.setState({
    //   loading: true,
    // });
    // createUser({ name: nameInput }).then(() => {
    //   this.setState({
    //     loading: false,
    //     logged: true,
    //   });
    // }).catch((error) => {
    //   console.log(error);
    // });
  }

  onInputChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchInput } = this.state;
    const minSearchLength = 2;
    const isSearchInvalid = searchInput.length < minSearchLength;

    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <SearchInput
            value={ searchInput }
            onChange={ this.onInputChange }
          />
          <SearchButton
            disabled={ isSearchInvalid }
            onClick={ this.handleSearch }
          />
        </form>
      </div>
    );
  }
}

export default Search;
