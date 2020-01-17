import React, { Component } from 'react';
import './App.css';
import { RouteStack } from './Route';

class App extends Component {
  render() {
    return (
      <div className="App">
          <RouteStack />
      </div>
    );
  }
}

export default App;
