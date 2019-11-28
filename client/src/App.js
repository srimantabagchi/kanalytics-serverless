import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./pages/register/register";
import SignIn from "./pages/signin/signin";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ResetPassword from "./pages/forgetpassword/resetpassword";

const App = () => (
  <Router>
    <Fragment>
      <div className='App'>
        <Route exact path='/' component={SignIn} />
        <Route path='/register' component={Register} />
        <Route path='/resetpassword' component={ResetPassword} />
      </div>
    </Fragment>
  </Router>
);

export default App;
