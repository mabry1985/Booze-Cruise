import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, AddKeg } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/add-keg" component={AddKeg} />
  </Switch>
);

export default Routes;
