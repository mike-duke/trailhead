import React, { Component } from 'react';
import './styles/Main.scss';


export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      disabled: true
    }
  }

  updateSearch = (event) => {
    this.setState({
      searchInput: event.target.value.toLowerCase(),
      disabled: false
    });
  }

  render() {
    return (
      <div className="trail-search-container">
        <form onSubmit={(event) => {
          event.preventDefault()
          this.props.searchTrails(this.state.searchInput)}} >
          <input onChange={this.updateSearch} type="search" placeholder="Search for a Trail"/>
          <button className="trail-search-button" disabled={this.state.disabled}>Search</button>
        </form>
      </div>
    )
  }
}