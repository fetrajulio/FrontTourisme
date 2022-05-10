import React, { Component, Fragment } from 'react';
import loginImg from './../../img/register.svg'
import './Register.css';

class Register extends Component {
  render() {
    return (
<div className="login">

<section class="vh-100">
  <div class="container-fluid h-custom login-content">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb-0 me-3">Sign up </p>
          </div>

    
       
          <div class="form-outline my-4">
            <input type="text" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter your first and last name" />
            <label class="form-label" for="form3Example3">Name</label>
          </div>

          <div class="form-outline my-4">
            <input type="text" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <label class="form-label" for="form3Example3">E-mail</label>
          </div>

          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" />
            <label class="form-label" for="form3Example4">Password</label>
          </div>
          
          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Confirm password" />
            <label class="form-label" for="form3Example4">Confirm Password</label>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-secondary btn-lg btn_style_login"
              >Register</button>
          </div>

        </form>
      </div>
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src={loginImg}
          class="img-fluid" alt="Sample image"/>
      </div>
    </div>
  </div>

</section>


      </div>
    
    );
  }
}

export default Register;
