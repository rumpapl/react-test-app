import React, { Component } from 'react';
import './App.css';
import ParentComp from './components/context/ParentComp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParentComp />
      </div>
    );
  }
}

export default App;
