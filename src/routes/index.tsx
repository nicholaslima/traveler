import { Switch, Route } from "react-router-dom";
import { Cities } from "../pages/cities";
import { Home } from "../pages/home";

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/search" component={Cities}></Route>
    </Switch>
  );
};

export { Router };
