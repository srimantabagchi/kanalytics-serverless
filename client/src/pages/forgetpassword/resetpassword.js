import React, { Component } from "react";
import "./resetpassword.css";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div class='container'>
          <div class='row'>
            <div class='col-sm-9 col-md-7 col-lg-5 mx-auto'>
              <div class='card card-signin flex-row my-5'>
                <div class='card-body'>
                  <h5 class='card-title text-center'>Reset Password</h5>
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
                      <label for='inputUserame'>Email Address</label>
                    </div>

                    <button
                      class='btn btn-lg btn-primary btn-block text-uppercase'
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
      </React.Fragment>
    );
  }
}

export default ResetPassword;
