import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
//components
import Navbar from "./Navbar";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Dashboard from "../Dashboard/Dashboard";

//Protected Route
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      sessionStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin"
          }}
        />
      )
    }
  />
);

export default () => {
  return (
    <Router>
      <Route exact path="/" render={() => <Redirect to="/signin" />} />
      <Route path={`/(signin|signup)`} component={Navbar} />
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};
