import React from 'react';
import Header from '../components/Header/Header';

class Album extends React.Component {
  render() {
    return (
      <div data-testid="page-album">
        <Header />
        Album
      </div>
    );
  }
}

export default Album;
