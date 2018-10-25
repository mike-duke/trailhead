import React, { Component } from 'react';
import Card from './Card.js';
import './styles/TrailList.scss';



export default class TrailList extends Component {
  constructor() {
    super();
  }
  render(){
    return (
      <div className="trail-list">
        {this.props.trails.map((trail) => {
          return <Card trail={trail}/>
        })
      }
      </div>
    )
  }
}