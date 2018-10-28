import React, { Component } from 'react';
import Card from './Card.js';
import './styles/TrailList.scss';



export default class TrailList extends Component {
  constructor() {
    super();
  }
  render(){
    console.log(this.props.trails)
    // debugger
    return (
      <div className="trail-list">
        {this.props.trails.map((trail, index) => {
          return <Card key={index} trail={trail} />
        })
      }
      </div>
    )
  }
}