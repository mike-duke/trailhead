import React, { Component } from 'react';
import Card from './Card.js';
import './styles/Main.scss';



export default class TrailList extends Component {
  constructor() {
    super();
  }

  render(){
    return (
      <div className="trail-list">
        {this.props.trails.map((trail, index) => {
          return <Card key={index} trail={trail} parks={this.props.parks} />
        })
      }
      </div>
    )
  }
}