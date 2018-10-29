import React, { Component } from 'react';
import './styles/Card.scss';

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
        <h1> Trail Name: {this.props.trail.trailName} </h1> 
        <h2> Park Name: {this.props.trail.parkName} </h2> 
        <div className="side-items">
          <div className="difficulty-rating" >
            <p>Difficulty Rating: {this.props.trail.difficultyRating}</p>
          </div>
          <div className="distance-roundtrip"> 
            <p>Distance Roundtrip:{this.props.trail.distanceRoundtripMiles}</p>
          </div>
        </div> 
      </div>
    )
  }
}