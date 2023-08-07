import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Album from './pages/Album/Album';
import Favorites from './pages/Favorites/Favorites';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search/Search';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <h1 id="youtune-title">
            You
            <span>Tune</span>
          </h1>
        </header>
        <BrowserRouter>
          <Switch>
            <Route path="/search" component={ Search } />
            <Route path="/album/:id" component={ Album } />
            <Route path="/favorites" component={ Favorites } />
            <Route path="/profile/edit" component={ ProfileEdit } />
            <Route path="/profile" component={ Profile } />
            <Route exact path="/" component={ Login } />
            <Route path="/*" component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
