import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BeerList, AddKeg, Error404 } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={BeerList} />
    <Route path="/add-keg" component={AddKeg} />
    <Route component={Error404} />
  </Switch>
);

export default Routes;
