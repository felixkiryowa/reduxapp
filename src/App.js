import React, { Component } from 'react';
import List from './components/List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Articles</h2>
        <List />
      </div>
    );
  }
}

export default App;
