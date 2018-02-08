import React, { Component } from 'react';
import { Repositories, Favorites }  from './components/favorites';
import NavBar from './components/navbar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to repostar</h1>
          <h3 className="App-description">Select your favorite repo of the week!</h3>
        </header>
        <div className="App-wrapper">
          <NavBar tabs={[{name: 'Trending repositories'}, { name:'My favorites' }]}
            components={[{id: 'trending-repositories', component: Repositories}, {id: 'favorites', component: Favorites}]}
          />
        </div>
      </div>
    );
  }
}

export default App;
