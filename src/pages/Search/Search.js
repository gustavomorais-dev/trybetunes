import React from 'react';
import Header from '../../components/Header/Header';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import Loading from '../../components/Loading';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';
import AlbumsList from './AlbumsList';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      searchInput: '',
      loading: false,
      albumsList: [],
      noAlbumsFound: false,
      searching: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    // Adquire o valor do input
    const { searchInput } = this.state;
    // Limpa o valor do input e inicia o loading
    this.setState({
      searchInput: '',
      loading: true,
    });
    // Faz a requisição
    searchAlbumsAPI(searchInput).then((response) => {
      // Loaded
      this.setState({
        loading: false,
        albumsList: response,
        noAlbumsFound: (response.length <= 0),
        searching: true,
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  onInputChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchInput, loading, albumsList, noAlbumsFound, searching } = this.state;
    const minSearchLength = 2;
    const isSearchInvalid = searchInput.length < minSearchLength;

    let content;
    if (loading) {
      content = <Loading />;
    } else if (noAlbumsFound && searching) {
      content = <span>Nenhum álbum foi encontrado</span>;
    } else if (albumsList.length > 0) {
      content = <AlbumsList albumsList={ albumsList } />;
    }

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

        { content }
      </div>
    );
  }
}

export default Search;
