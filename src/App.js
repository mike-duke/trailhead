import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TrailList from './TrailList.js';
import Header from './Header.js';
import Search from './Search.js'



class App extends Component {
  render() {
    return (
      <div className="App">
        
        <h1>TrailHead</h1>
        <Header />
        <TrailList />
        
      </div>
    );
  }
}

export default App;
