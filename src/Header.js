import React, { Component } from 'react';
import Search from './Search.js';
import './styles/Main.scss';



export default class Header extends Component {
  constructor() {
    super();
  }
  render(){
    return (
      <header>
        <div className="hiking-icon"><i className="fas fa-hiking"></i></div>
        <h1>TrailHead</h1>
        <Search searchTrails={this.props.searchTrails} />
        <button className="reset-search-button">Start Over</button>
      </header>
    )
  }
}