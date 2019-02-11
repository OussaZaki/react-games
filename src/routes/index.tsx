import React from "react";
import { Route, Switch } from "react-router";

import Home from "../home";
import Puzzle2048 from "../games/puzzle-2048";
import Concentration from "../games/concentration";

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/concentration" component={Concentration} />
    <Route exact path="/2048" component={Puzzle2048} />
    <Route render={() => <div>404 Not found</div>} />
  </Switch>
);

export default routes;
