import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Navbar from "./Navbar";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Dashboard from "../Dashboard/Dashboard";

export default () => {
  return (
    <Router>
      <Route exact path="/" render={() => <Redirect to="/signup" />} />
      <Route path={`/(signin|signup)`} component={Navbar} />
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};
