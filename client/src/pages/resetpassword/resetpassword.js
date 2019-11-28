import React, { Fragment } from "react";
import "./resetpassword.css";

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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ResetPassword;
