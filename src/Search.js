import React, { Component } from 'react';
import './styles/Search.scss';


export default class Search extends Component {
  constructor() {
    super();
  }

  updateSearch() {

  }

  submitSearch() {

  }

  render(){
    return (
      <div>
        <form>
          <input type="search" placeholder="Trail Search"/>
          <button className="trail-search-button">Search</button>
        </form>
      </div>
    )
  }
}