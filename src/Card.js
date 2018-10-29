import React, { Component } from 'react';
import './styles/Main.scss';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.trailName = props.trail.trailName;
    this.parkName = props.trail.parkName;
    this.difficultyRating = props.trail.difficultyRating;
    this.distanceRoundtripMiles = props.trail.distanceRoundtripMiles
    this.state = {
      fullCard: false
    }
  }

  render() {
    console.log(this.props)
    return ( 
      <div className="card" >
        <h1><span className="trail-name-title">Trail:</span> {this.trailName} </h1> 
        <h2> <span className="park-name-title">National Park:</span> {this.parkName} </h2> 
        <div className="distance-difficulty-container">
          <div className="difficulty-rating" >
            <p><span className="difficulty-rating-text">Difficulty Rating: </span>{this.difficultyRating}</p>
          </div>
          <div className="distance-roundtrip"> 
            <p><span className="distance-roundtrip-text">Distance Roundtrip: </span>{this.distanceRoundtripMiles}</p>
          </div>
        </div> 
      </div>
    )
  }
}