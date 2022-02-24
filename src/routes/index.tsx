import { Switch, Route } from "react-router-dom";
import { Cities } from "../pages/cities";
import { City } from "../pages/city";
import { Home } from "../pages/home";

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/search" component={Cities}></Route>
      <Route path="/city/:name" component={City}></Route>
    </Switch>
  );
};

export { Router };
