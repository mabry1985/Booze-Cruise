import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <div>
      <h3>{props.name} - {props.abv}%</h3>
      <p><em>{props.brewery}</em></p>
      <p>${props.price}.00</p>
      <p>{props.pintsLeft}</p>
      <button
        onClick={() => props.onSellBeer(props.id)}>
        Sell
      </button>
      <hr />
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brewery: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  pintsLeft: PropTypes.number,
  onSellBeer: PropTypes.func,

};

export default Keg;
