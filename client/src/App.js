import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./pages/register/register";
import SignIn from "./pages/signin/signin";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ResetPassword from "./pages/resetpassword/resetpassword";
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
            <Route exact path='/' component={SignIn} />
            <Route path='/register' component={Register} />
            <Route path='/resetpassword' component={ResetPassword} />
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
