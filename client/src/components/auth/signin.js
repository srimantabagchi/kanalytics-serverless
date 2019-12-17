import React, { Fragment, useState } from "react";
import { BrowserRouter as Route, Link, Redirect } from "react-router-dom";
import "./signin.css";
import Register from "./register";
import ResetPassword from "./resetpassword";
import { login } from "../../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const SignIn = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/profile' />;
  }

  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
            <div className='card card-signin my-5'>
              <div className='card-body'>
                <h5 className='card-title text-center'>Sign In</h5>
                <form className='form-signin' onSubmit={e => onSubmit(e)}>
                  <div className='form-label-group'>
                    <input
                      type='email'
                      id='inputEmail'
                      className='form-control'
                      placeholder='Email address'
                      name='email'
                      value={email}
                      onChange={e => onChange(e)}
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
                      name='password'
                      value={password}
                      onChange={e => onChange(e)}
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
    </Fragment>
  );
};

SignIn.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(SignIn);
