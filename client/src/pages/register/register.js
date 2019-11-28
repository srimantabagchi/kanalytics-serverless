import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import "./register.css";
import SignIn from "../signin/signin";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitLogin(e) {}

  render() {
    return (
      <React.Fragment>
        <div class='container'>
          <div class='row'>
            <div class='col-sm-9 col-md-7 col-lg-5 mx-auto'>
              <div class='card card-signin flex-row my-5'>
                <div class='card-body'>
                  <h5 class='card-title text-center'>Register</h5>
                  <form class='form-signin'>
                    <div class='form-label-group'>
                      <input
                        type='text'
                        id='inputUserame'
                        class='form-control'
                        placeholder='Username'
                        required
                        autofocus
                      ></input>
                      <label for='inputUserame'>Username</label>
                    </div>

                    <div class='form-label-group'>
                      <input
                        type='email'
                        id='inputEmail'
                        class='form-control'
                        placeholder='Email address'
                        required
                      ></input>
                      <label for='inputEmail'>Email address</label>
                    </div>

                    <hr></hr>

                    <div class='form-label-group'>
                      <input
                        type='password'
                        id='inputPassword'
                        class='form-control'
                        placeholder='Password'
                        required
                      ></input>
                      <label for='inputPassword'>Password</label>
                    </div>

                    <div class='form-label-group'>
                      <input
                        type='password'
                        id='inputConfirmPassword'
                        class='form-control'
                        placeholder='Password'
                        required
                      ></input>
                      <label for='inputConfirmPassword'>Confirm password</label>
                    </div>

                    <button
                      class='btn btn-lg btn-primary btn-block text-uppercase'
                      type='submit'
                    >
                      Register
                    </button>
                    <Link class='d-block text-center mt-2 small' to={`/`}>
                      Sign In
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Route exact path='/' component={SignIn} />
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
