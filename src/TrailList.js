import React, { Component } from 'react';
import Card from './Card.js';
import './styles/Main.scss';

export default function Traillist(props) {

  return (
    <div className="trail-list">
      {props.trails.map((trail, index) => {
        return <Card key={index} trail={trail} parks={props.parks} />
      })
    }
    </div>
  )
}