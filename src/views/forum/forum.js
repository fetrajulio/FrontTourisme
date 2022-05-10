import React, { Component, Fragment } from 'react';

import './Forum.css';

class Forum extends Component {
  render() {
    return (
        <div>
          <div class="container">
    <div class="be-comment-block">
        <h1 class="comments-title">Commentaire</h1>
        <div class="be-comment">
            <div class="be-img-comment">	
                <a href="blog-detail-2.html">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="be-imgEl-comment"/>
                </a>
            </div>
            <div class="be-comment-content">
                
                    <span class="be-comment-name">
                        <a href="#">Arifetra Julio</a>
                        </span>
                    <span class="be-comment-time">
                        2022-03-23T20:08:00
                    </span>
    
                <p class="be-comment-text">
                poudre de thé très humide dû certainement a un mauvais stockage!! et cerise pourrie sur le gâteau paquer ouvert a l'intérieur de l'enveloppe Amazon ! donc si je récapitule !! le vendeur et Amazon son coupables l'un et l'autre!! et de plus c'est un Matcha très amer par rapport a d'autres marques!! si vous aimez le vrai Matcha! je déconseille celui là!!
                </p>
            </div>
        </div>
        <form class="form-block">
            <div class="row">
                <div class="col-12">									
                    <div class="form-group">
                        <textarea class="form-input" required placeholder="Votre commentaire"></textarea>
                    </div>
                </div>
                <div class="col-4">
                    <a class="btn btn-primary text-right">Commenter</a>
                </div>
            </div>
        </form>
    </div>
    </div>
        </div>
    );
  }
}

export default Forum;