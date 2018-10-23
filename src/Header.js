import React, { Component } from 'react';
import Search from './Search.js'



export default class Header extends Component {
  constructor() {
    super();
  }
  render(){
    return (
      <header>
        <p>Header</p>
        <Search />
      </header>
    )
  }
}