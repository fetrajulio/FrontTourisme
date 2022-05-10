import React, { Component, Fragment } from 'react';

import './Image.css';
import cat1 from './../../../img/cat1.jpg';
import cat2 from './../../../img/cat2.jpg';
import cat3 from './../../../img/cat3.jpg';
import cat4 from './../../../img/cat4.jpg';
class Image extends Component {
  render() {
    return (
      <section class="section-4">
    <div class="section-4-bottom">
        <div class="block-25">
            <img class="img-block-section-4" src={cat1}/>
        </div>
        <div class="block-25">
            <img class="img-block-section-4" src={cat2}/>
        </div>
        <div class="block-25">
            <img class="img-block-section-4" src={cat3}/>
        </div>
        <div class="block-25">
            <img class="img-block-section-4" src={cat4}/>
        </div>
    </div>

</section>
    );
  }
}

export default Image;
