import React, { Fragment, useState } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <nav className='navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            MY TEST APP
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarResponsive'
            aria-controls='navbarResponsive'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarResponsive'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Login
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
