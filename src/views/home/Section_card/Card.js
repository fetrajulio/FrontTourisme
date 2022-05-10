import React, { Component, Fragment } from 'react';
import Bird from './../../../img/bird.jpg'
import './Card.css';

class Card extends Component {

  render() {
    return (
      <div class="card text-center">
    <div class="card-body text-center">
      <h4>
        Why is the Tesla Cybertruck designed the way it
        is?
      </h4>
      <p>
        An exploration into the truck's polarising design
      </p>
    </div>
  </div>
    );
  }
}

export default Card;
