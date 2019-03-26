import React, { Component } from 'react';
import Header from './Header/HeaderContainer';
import { headerContent } from './Header/headerContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header headerContent={headerContent} playVideo = {this.playVideo} />
      </div>
    );
  }
}

export default App;
