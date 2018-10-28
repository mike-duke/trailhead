import React, { Component } from 'react';
import './styles/Search.scss';


export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
    }
  }

  updateSearch = (event) => {
    this.setState({
      searchInput: event.target.value.toLowerCase()
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={(event) => {
          event.preventDefault()
          this.props.searchTrails(this.state.searchInput)}} >
          <input onChange={this.updateSearch} type="search" placeholder="Trail Search"/>
          <button className="trail-search-button">Search</button>
        </form>
      </div>
    )
  }
}