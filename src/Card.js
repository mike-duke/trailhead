import React, { Component } from 'react';
import './styles/Main.scss';

export default class Card extends Component {
  constructor(props) {
    super();
    this.state = {
      fullCard: false,
      nationalPark: {
        vistorsLastYear: 0,
        yearEstablished: 0,
        openMessage: '',
        parkingMessage: ''
      }
    }
  }

  toggleFullCard = () => {
    this.setState({
      fullCard: !this.state.fullCard,
    })
    this.getPark()
  }

  getPark = () => {
    this.props.parks.filter((park) => {
      return park.parkName === this.props.trail.parkName
    }).forEach((park) => {
      this.setState({
        nationalPark: {
          visitorsLastYear: park.vistorsLastYear,
          yearEstablished: park.yearEstablished,
        }
      })
    })
  }

  getOpenMessage = (trail) => {
    let openString = 'This trail ';

    if (trail.openInWinter) {
      openString += 'is '
    } else {
      openString += 'is not '
    }
    return openString += 'open in winter.';
  }

  getParkingMessage = (trail) => {
    let parkingString = 'Parking ';

    if (trail.parkingAtTrailhead) {
      parkingString += 'is '
    } else {
      parkingString += 'is not '
    }
    return parkingString += 'available at the trailhead.';
  }

  render() {
    let open = this.getOpenMessage(this.props.trail)
    let parking = this.getParkingMessage(this.props.trail)
    if (this.state.fullCard) {
      return (
        <div className="full-card" onClick={this.toggleFullCard}>
          <h1><span className="trail-name-title">Trail:</span> {this.props.trail.trailName} </h1> 
            <p>{open}</p>
            <p>{parking}</p>
            <p>Starting Elevation: <span>{(this.props.trail.startingElevationFeet).toLocaleString('en')} ft.</span></p>

          <h2><span className="park-name-title">National Park: </span>{this.props.trail.parkName}</h2>

          <p>
            Established in <span>{this.state.nationalPark.yearEstablished}</span>
          </p>
          <p>
            Visitors last year: <span>{(this.state.nationalPark.visitorsLastYear).toLocaleString('en')}</span>
          </p>

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
    } else {
      return ( 
        <div className="card" onClick={this.toggleFullCard}>
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
}