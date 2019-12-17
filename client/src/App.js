import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/auth/register";
import SignIn from "./components/auth/signin";
import Profile from "./components/dashboard/profile";
import PrivateRoute from "./components/routing/privateroute";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ResetPassword from "./components/auth/resetpassword";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./layouts/navbar";
import Alert from "./layouts/Alert";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <div className='App'>
            <Alert />
            <Switch>
              <Route exact path='/' component={SignIn} />
              <Route path='/register' component={Register} />
              <Route path='/resetpassword' component={ResetPassword} />
              <PrivateRoute exact path='/profile' component={Profile} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
