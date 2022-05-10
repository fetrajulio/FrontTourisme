import React, { Component, Fragment } from 'react';
import loginImg from './../../img/login.svg'
import './Login.css';

class Login extends Component {
  render() {
    return (
<div className="login">

<section class="vh-100">
  <div class="container-fluid h-custom login-content">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src={loginImg}
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb-0 me-3">Sign in with</p>
            <button type="button" class="btn btn-secondary btn-floating mx-1">
              Facebook
            </button>

            <button type="button" class="btn btn-secondary btn-floating mx-1">
              Twitter
            </button>

            <button type="button" class="btn btn-secondary btn-floating mx-1">
              LinkedIn
            </button>
          </div>

    
       
          <div class="form-outline my-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <label class="form-label" for="form3Example3">Email address</label>
          </div>

          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" />
            <label class="form-label" for="form3Example4">Password</label>
          </div>

          <div class="d-flex justify-content-between align-items-center">
         
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text-body">Forgot password?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-secondary btn-lg btn_style_login"
              >Login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#"
                class="link-danger">Register</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>

</section>


      </div>
    
    );
  }
}

export default Login;
