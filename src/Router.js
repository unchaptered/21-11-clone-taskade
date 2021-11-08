import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./Routes/Home";
import Account from "./Routes/Account";
import Main from "./Routes/Main";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/account" exact={true} component={Account} />
        <Route path="/main" exact={true} component={Main} />

        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
