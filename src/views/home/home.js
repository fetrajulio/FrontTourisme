import React, { Component, Fragment } from 'react';
import Header from './Section_header/Header';
import CardComponents from './Section_card/Card';
import Image from './Section_img/Image';
import Contact from './Section_contact/Contact';

import './Home.css';

class Home extends Component {
  render() {
    const elements = [1, 2, 3, 4];

    return (
        <div>
          <Header />
          <div className='relative'>          
            <div className='d-flex justify-content-center align-items-center absolute'>
              {elements.map(() => {
                return <CardComponents />
              })}
            </div>
          </div>
          <Image/>
          <Contact />
          
        </div>
    );
  }
}

export default Home;
