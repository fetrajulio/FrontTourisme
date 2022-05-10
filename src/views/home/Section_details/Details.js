import React, { Component, Fragment } from 'react';
import Bird from './../../../img/bird.jpg' ;
import './Details.css';
import imgBaobab from './../../../img/2.jpg';

class Details extends Component {

  render() {
    return (  
      <div class="container">
  <div class="row content-margin">
    <div class="col-xl-6 col-lg-6 col-md-6">
      <img src={imgBaobab} alt="responsive webite" class="img-fluid"/>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-6">
      <h2>Bootstrap Responsive Website</h2>
      <p>Bootstrap is a famous front-end framework used to create mobile-first responsive websites. The latest release
        version of bootstrap has removed JQuery dependency not fully work on vanilla javascript.</p>
      <p>Using bootstrap it becomes very easy to build a responsive website.</p>
    </div>
  </div>
</div>       
     

    );
  }
}

export default Details;
