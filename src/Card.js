import React, { Component } from 'react';
import './styles/Card.css';



export default class Card extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.trailName = props.trailName;
    this.parkName = props.parkName;
    this.difficultyRating = props.difficultyRating;
    this.distanceRoundtripMiles = props.distanceRoundtripMiles
      this.state = {
        fullCard: false
      }
  }

  render(){
    return (
      <div className="card">
      <h1>{this.trailName}</h1>
      <h2>{this.parkName}</h2>
        <p>{this.difficultyRating}</p>
        <p>{this.distanceRoundtripMiles}</p>
      </div>
    )
  }
}
