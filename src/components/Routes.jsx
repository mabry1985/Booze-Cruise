import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BeerList, AddKeg } from '../containers';
import EditKeg from './EditKeg';
import Error404 from './Error404';
import PropTypes from 'prop-types';

const Routes = (props) => (
  <Switch>
    <Route exact path="/"
           render={()=><BeerList
           kegList={props.kegList}
           onSellBeer={props.onSellBeer}
           onEditKeg={props.onEditKeg}/>}
           />
    <Route path="/add-keg"
           render={()=><AddKeg
           onNewKegCreation={props.onAddingNewKeg} />}
           />
    <Route path="/admin"
           render={(props)=><BeerList
           kegList={props.kegList}
           currentRouterPath={props.location.pathname} />}
           />
    <Route component={Error404} />
  </Switch>
);

Routes.propTypes = {
  onNewKegCreation: PropTypes.func,
  kegList: PropTypes.array,
  onSellBeer: PropTypes.func,
  onEditKeg: PropTypes.func,
  id: PropTypes.string,
};

export default Routes;
