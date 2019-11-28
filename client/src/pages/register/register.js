import React, { Fragment, useState } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import "./register.css";
import SignIn from "../signin/signin";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      console.log(formData);
    }
  };

  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
            <div className='card card-signin flex-row my-5'>
              <div className='card-body'>
                <h5 className='card-title text-center'>Register</h5>
                <form className='form-signin' onSubmit={e => onSubmit(e)}>
                  <div className='form-label-group'>
                    <input
                      type='text'
                      id='inputUserame'
                      className='form-control'
                      placeholder='Username'
                      name='name'
                      value={name}
                      onChange={e => onChange(e)}
                      required
                      autoFocus
                    ></input>
                    <label htmlFor='inputUserame'>Username</label>
                  </div>

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
                    ></input>
                    <label htmlFor='inputEmail'>Email address</label>
                  </div>

                  <hr></hr>

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

                  <div className='form-label-group'>
                    <input
                      type='password'
                      id='inputConfirmPassword'
                      className='form-control'
                      placeholder='Password'
                      name='password2'
                      value={password2}
                      onChange={e => onChange(e)}
                      required
                    ></input>
                    <label htmlFor='inputConfirmPassword'>
                      Confirm password
                    </label>
                  </div>

                  <button
                    className='btn btn-lg btn-primary btn-block text-uppercase'
                    type='submit'
                  >
                    Register
                  </button>
                  <Link className='d-block text-center mt-2 small' to={`/`}>
                    Sign In
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Route exact path='/' component={SignIn} />
      </div>
    </Fragment>
  );
};

export default Register;
