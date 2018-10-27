import React, { Component } from 'react';
import './styles/LocationDisplay.scss';


export default class LocationDisplay extends Component {
  constructor() {
    super();
  }


  render(){
    console.log('Location', this.props.location);
    return (
      <div className="location-display">
        <h1>{this.props.location}</h1>
      </div>
    )
  }
}
