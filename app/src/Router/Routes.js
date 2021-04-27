import { Switch, Route, Redirect } from 'react-router-dom';

import Home from "../Components/Home";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
)

export default Routes;