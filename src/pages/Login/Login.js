import React from 'react';
import { Redirect } from 'react-router-dom';
import NameInput from './NameInput';
import SubmitButton from './SubmitButton';
import { createUser } from '../../services/userAPI';
import Loading from '../../components/Loading';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      nameInput: '',
      loading: false,
      logged: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.handleCreateUser = this.handleCreateUser.bind(this);
  }

  handleCreateUser() {
    const { nameInput } = this.state;
    this.setState({
      loading: true,
    });
    createUser({ name: nameInput }).then(() => {
      this.setState({
        loading: false,
        logged: true,
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
    const { nameInput, loading, logged } = this.state;
    const minNameLength = 3;
    const isNameInvalid = nameInput.length < minNameLength;

    if (logged) return (<Redirect to="/search" />);

    return (
      <div data-testid="page-login">
        {loading ? (
          <Loading />
        ) : (
          <form>
            <NameInput
              value={ nameInput }
              onChange={ this.onInputChange }
            />
            <SubmitButton
              disabled={ isNameInvalid }
              onClick={ this.handleCreateUser }
            />
          </form>
        )}
      </div>
    );
  }
}

export default Login;
