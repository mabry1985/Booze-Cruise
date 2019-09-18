import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';

function KegList(props) {
  return (
    <div>
      <hr/>
      {Object.keys(props.kegList).map(function (kegId) {
        var keg = props.kegList[kegId];
        return <Keg name={keg.name}
        brewery={keg.brewery}
        price={keg.price}
        style={keg.style}
        abv={keg.abv}
        pintsLeft={keg.pintsLeft}
        key={keg.id}
        id={keg.id}
        onSellBeer={props.onSellBeer}
        onEditKeg={props.onEditKeg} />;
      })}

    </div>
  );
};

KegList.propTypes = {
  kegList: PropTypes.object,
  onSellBeer: PropTypes.func,
  onEditKeg: PropTypes.func,
};

export default KegList;
