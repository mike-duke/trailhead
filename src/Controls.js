import React, { Component } from 'react';
import './styles/Controls.scss';
import Search from './Search.js';


export default class Controls extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form>
        <select>
          
        </select>
        <select>

        </select>
        <Search searchTrails={this.props.searchTrails} />
        <button className="reset-search-button">Start Over</button>
      </form>
    )
  }

}