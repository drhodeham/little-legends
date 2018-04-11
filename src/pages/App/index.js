import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Header from '../../organisms/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text="Text"/>
      </div>
    );
  }
}

export default App;
