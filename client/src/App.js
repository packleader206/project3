import React, { Component } from 'react';
import './App.css';

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pet Book</h1>
        <Navbar />
        <Landing />
      </div>
    );
  }
}

export default App;
