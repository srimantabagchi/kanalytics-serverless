import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import "./signin.css";
import Register from "../register/register";
import ResetPassword from "../forgetpassword/resetpassword";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitLogin(e) {}

  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
              <div className='card card-signin my-5'>
                <div className='card-body'>
                  <h5 className='card-title text-center'>Sign In</h5>
                  <form className='form-signin'>
                    <div className='form-label-group'>
                      <input
                        type='email'
                        id='inputEmail'
                        className='form-control'
                        placeholder='Email address'
                        required
                        autoFocus
                      ></input>
                      <label htmlFor='inputEmail'>Email address</label>
                    </div>

                    <div className='form-label-group'>
                      <input
                        type='password'
                        id='inputPassword'
                        className='form-control'
                        placeholder='Password'
                        required
                      ></input>
                      <label htmlFor='inputPassword'>Password</label>
                    </div>

                    <div className='custom-control custom-checkbox mb-3'>
                      <input
                        type='checkbox'
                        className='custom-control-input'
                        id='customCheck1'
                      ></input>
                      <label
                        className='custom-control-label'
                        htmlFor='customCheck1'
                      >
                        Remember password
                      </label>
                    </div>
                    <button
                      className='btn btn-lg btn-primary btn-block text-uppercase'
                      type='submit'
                    >
                      Sign in
                    </button>
                    <hr className='my-4'></hr>
                    <Link
                      className='d-block text-center mt-2 small'
                      to={`/register`}
                    >
                      Register
                    </Link>
                    <Link
                      className='d-block text-center mt-2 small'
                      to={`/resetpassword`}
                    >
                      Forgot Password?
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Route path='/register' component={Register} />
          <Route path='/resetpassword' component={ResetPassword} />
        </div>
      </React.Fragment>
    );
  }
}

export default SignIn;
