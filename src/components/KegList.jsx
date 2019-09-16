import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';

function KegList(props) {
  return (
    <div>
      <hr />
      {props.kegList.map((keg) =>
        <Keg name={keg.name}
          brewery={keg.brewery}
          price={keg.price}
          style={keg.style}
          abv={keg.abv}
          pintsLeft={keg.pintsLeft}
          key={keg.id}
          id={keg.id}
          onSellBeer={props.onSellBeer}
          onEditKeg={props.onEditKeg}
          onDeleteKeg={props.onDeleteKeg} />
      )}
     </div>
   );
};

KegList.propTypes = {
  kegList: PropTypes.array,
  onSellBeer: PropTypes.func,
  onEditKeg: PropTypes.func,
  onDeleteKeg: PropTypes.func,
};

export default KegList;
