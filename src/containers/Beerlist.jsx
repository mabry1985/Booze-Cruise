import React from 'react';
import KegList from '../components/KegList';
import PropTypes from 'prop-types';

const BeerList = (props) => (
  <div>
    <h1>Beer List</h1>
    <KegList kegList={props.kegList}
             onSellBeer={props.onSellBeer}
             onEditKeg={props.onEditKeg}/>
  </div>
);

BeerList.propTypes = {
  kegList: PropTypes.array,
  onSellBeer: PropTypes.func,
  onEditKeg: PropTypes.func,
};

export default BeerList;
