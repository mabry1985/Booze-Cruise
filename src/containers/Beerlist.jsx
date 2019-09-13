import React from 'react';
import KegList from '../components/KegList';
import PropTypes from 'prop-types';

const BeerList = (props) => (
  <div>
    <h1>Beer List</h1>
    <KegList kegList={props.kegList}/>
  </div>
);

BeerList.propTypes = {
  kegList: PropTypes.array,
};

export default BeerList;
