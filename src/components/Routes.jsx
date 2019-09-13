import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BeerList, AddKeg } from '../containers';
import Error404 from './Error404';
import PropTypes from 'prop-types';

const Routes = (props) => (
  <Switch>
    <Route exact path="/" render={()=><BeerList kegList={props.kegList} />} />
    <Route path="/add-keg"
           render={()=><AddKeg onNewKegCreation={props.onAddingNewKeg} />}
    />
    <Route component={Error404} />
  </Switch>
);

Routes.propTypes = {
  onNewKegCreation: PropTypes.func,
  kegList: PropTypes.array,
};

export default Routes;
