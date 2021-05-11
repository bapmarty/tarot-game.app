import { Switch, Route, Redirect } from 'react-router-dom';

import Home from "../Components/Home";
import Rules from '../Components/Rules';
import Support from '../Components/Support';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/rules" component={Rules} />
    <Route exact path="/support" component={Support} />
    <Redirect to="/"/>
  </Switch>
)

export default Routes;