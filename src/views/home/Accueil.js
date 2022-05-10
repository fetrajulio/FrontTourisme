import React, { Component, Fragment } from 'react';
import Header from './Section_header/Header';
import CardComponents from './Section_card/Card';
import Contact from './Section_contact/Contact';

import './Accueil.css';

class Accueil extends Component {
  render() {
    const elements = [1, 2, 3, 4];

    return (
        <div>
          <Header />
          <CardComponents />
          <div className='container mp'>
            <Contact />
          </div>          
        </div>
    );
  }
}

export default Accueil;