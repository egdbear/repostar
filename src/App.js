import React, { Component } from 'react';
import Favorites from './favorites';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to repostar</h1>
          <h3 className="App-description">Select your favorite repo of the week!</h3>
        </header>
        <Favorites />
      </div>
    );
  }
}

export default App;
