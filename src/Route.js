import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./App";
import Main from "./Main";
import SecondMain from "./SecondMain";
import ThirdMain from "./ThirdMain";

export default (
  <Route path="/App" component={App}>
    <IndexRoute component={Main} />
    <Route path="/SecondMain" component={SecondMain} />
    <Route path="/ThirdMain" component={ThirdMain} />
  </Route>
);
