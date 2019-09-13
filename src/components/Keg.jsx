import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <div>
      <h3>{props.name} - {props.abv}</h3>
      <p><em>{props.brewery}</em></p>
      <p>{props.price}</p>
      <p>{props.pintsLeft}</p>
      <hr />
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brewery: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  pintsLeft: PropTypes.number,
};

export default Keg;
