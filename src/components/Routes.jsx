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
           onEditKeg={props.onEditKeg}
           onDeleteKeg={props.onDeleteKeg}/>}
           />
    <Route path="/add-keg"
           render={()=><AddKeg
           onNewKegCreation={props.onAddingNewKeg}
           onSend={props.onSend}/>}
           />
    <Route component={Error404} />
  </Switch>
);

Routes.propTypes = {
  onNewKegCreation: PropTypes.func,
  kegList: PropTypes.array,
  onSellBeer: PropTypes.func,
  onEditKeg: PropTypes.func,
  onSend: PropTypes.func,
  id: PropTypes.string,
};

export default Routes;
