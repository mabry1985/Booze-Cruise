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
          abv={keg.abv}
          pintsLeft={keg.pintsLeft}
          key={keg.id}
          id={keg.id}
          onSellBeer={props.onSellBeer} />
      )}
     </div>
   );
};

KegList.propTypes = {
  kegList: PropTypes.array,
  onSellBeer: PropTypes.func,
};

export default KegList;
