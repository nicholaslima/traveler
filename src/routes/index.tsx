import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/home";

const Router = () => {
  return (
    <Switch>
      <Route path="/" component={Home}></Route>
    </Switch>
  );
};

export { Router };
