import React, { Fragment } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import "./resetpassword.css";
import SignIn from "./signin";
import Register from "./register";

const ResetPassword = () => {
  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
            <div className='card card-signin flex-row my-5'>
              <div className='card-body'>
                <h5 className='card-title text-center'>Reset Password</h5>
                <form className='form-signin'>
                  <div className='form-label-group'>
                    <input
                      type='text'
                      id='inputUserame'
                      className='form-control'
                      placeholder='Username'
                      required
                      autoFocus
                    ></input>
                    <label htmlFor='inputUserame'>Email Address</label>
                  </div>

                  <button
                    className='btn btn-lg btn-primary btn-block text-uppercase'
                    type='submit'
                  >
                    Send Reset Link
                  </button>
                  <hr className='my-4'></hr>
                  <Link className='d-block text-center mt-2 small' to={`/`}>
                    Back to SignIn
                  </Link>
                  <Link
                    className='d-block text-center mt-2 small'
                    to={`/register`}
                  >
                    Register
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Route path='/' component={SignIn} />
      <Route path='/register' component={Register} />
    </Fragment>
  );
};

export default ResetPassword;
