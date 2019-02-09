import React from "react";
import { Route, Switch } from "react-router";
import Home from "../home";
import Concentration from "../games/concentration";

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/concentration" component={Concentration} />
    <Route render={() => <div>404 Not found</div>} />
  </Switch>
);

export default routes;
