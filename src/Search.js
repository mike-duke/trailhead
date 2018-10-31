import React, { Component } from 'react';
import './styles/Main.scss';
import Trie from '@aithon/autocomplete'


export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      disabled: true,
      suggestions: []
    }
  }

  updateSearch = (event) => {
    this.setState({
      searchInput: event.target.value.toLowerCase(),
      disabled: false
    });
    this.makeSuggestions();
  }

  makeSuggestions() {
    let trie = new Trie();
    let trailNamesArray = this.props.trails.map((trail) => {
      return trail.trailName;
    })
    trie.populate(trailNamesArray)
    this.setState({
      suggestions: trie.suggest(this.state.searchInput)
    })
  }

  render() {
    return (
      <div className="trail-search-container">
        <form onSubmit={(event) => {
          event.preventDefault()
          this.props.searchTrails(this.state.searchInput)}} >
          <input onChange={this.updateSearch} type="search" list="trail-names" placeholder="Search for a Trail" />
          <datalist id="trail-names">
            {
              this.state.suggestions.map((word, index) => {
                return <option key={index} value={word} />
              })
            }
            </datalist>
          <button className="trail-search-button" disabled={this.state.disabled}>Search</button>
        </form>
      </div>
    )
  }
}