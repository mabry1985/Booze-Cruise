import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EditKeg from './EditKeg';
import { useSelector, useDispatch, connect } from 'react-redux';

function Keg(props) {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div key={props.keg.id}>
      <h3>{props.keg.name} - {props.keg.abv}%</h3>
      <p><em>{props.keg.brewery}</em></p>
      <p>${props.keg.price}.00</p>
      <p>pints left: {props.keg.pintsLeft}</p>
      <button
        onClick={() => dispatch({ type: 'SELL_BEER', id: props.keg.id })}>
        Sell
      </button>
      <button
        onClick={() => dispatch({ type: 'EDIT_BEER', id: props.keg.id })}>
        Edit
      </button>
      <hr />
    </div>
  );
}

export default connect()(Keg);
