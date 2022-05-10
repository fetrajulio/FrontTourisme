import React, { Component, Fragment } from 'react';

import './Card.css';

class Card extends Component {
  render() {
    return (
      <div id="splash" class="position-relative">
          <div class="wrapper container">
              <div class="home-content d-flex h-100 justify-content-center align-items-center">
                  <div class="splash-text text-center">
                      <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                      <p class="mb-5 d-none d-md-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis id est in viverra. Pellentesque tincidunt mi enim, eu tincidunt arcu tempus at. Maecenas vitae nunc ut sapien rutrum fringilla sit amet nec dui. Duis imperdiet fringilla blandit.
                      </p>
                      <div class="text-center">
                          <a href="#" class="btn btn-primary">Découvrez nos produits</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Card;
