import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EditKeg from './EditKeg';

function Keg(props) {
  return (
    <Router>
    <div>
      <h3>{props.name} - {props.abv}%</h3>
      <p><em>{props.brewery}</em></p>
      <p>${props.price}.00</p>
      <p>{props.pintsLeft}</p>
      <button
        onClick={() => props.onSellBeer(props.id)}>
        Sell
      </button>
      <Link to={{
          pathname: '/edit-keg/' + props.id,
          id: props.id,
        }}>
        <button type="button">
             Edit Keg
        </button>
      </Link>
      <Route path="/edit-keg/:id"
             render={()=><EditKeg
             onEditKeg={props.onEditKeg}
             name={props.name}
             brewery={props.brewery}
             price={props.price}
             style={props.style}
             abv={props.abv}
             pintsLeft={props.pintsLeft}
             key={props.id}
             id={props.id} />}
             />
      <hr />
    </div>
    </Router>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brewery: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.number,
  style: PropTypes.string,
  id: PropTypes.string,
  pintsLeft: PropTypes.number,
  onSellBeer: PropTypes.func,
  onEditKeg: PropTypes.func,

};

export default Keg;
