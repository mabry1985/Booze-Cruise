import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';

function KegList(props) {
  return (
    <div>
      <hr />
      {props.kegList.map((keg, index) =>
        <Keg name={keg.name}
          brewery={keg.brewery}
          price={keg.price}
          abv={keg.abv}
          pintsLeft={keg.pintsLeft}
          key={index} />
      )}
     </div>
   );
};

KegList.propTypes = {
  kegList: PropTypes.array,
};

export default KegList;
