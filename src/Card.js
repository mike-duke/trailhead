import React, { Component } from 'react';
import './styles/Main.scss';

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      fullCard: false
    }
  }

  render() {
    console.log(this.props)
    return ( 
      <div className="card" >
        <h1><span className="trail-name-title">Trail:</span> {this.props.trail.trailName} </h1> 
        <h2> <span className="park-name-title">National Park:</span> {this.props.trail.parkName} </h2> 
        <div className="distance-difficulty-container">
          <div className="difficulty-rating" >
            <p><span className="difficulty-rating-text">Difficulty Rating: </span>{this.props.trail.difficultyRating}</p>
          </div>
          <div className="distance-roundtrip"> 
            <p><span className="distance-roundtrip-text">Distance Roundtrip: </span>{this.props.trail.distanceRoundtripMiles}</p>
          </div>
        </div> 
      </div>
    )
  }
}