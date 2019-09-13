import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
  return (
    <div>
      <hr />
      {props.kegList.map((keg, index) =>
        <Keg name={keg.name}
          brewery={keg.brewery}
          price={keg.price}
          abv={keg.abv}
          key={index} />
      )}
     </div>
   );
};

KegList.propTypes = {
  kegList: PropTypes.array,
};

export default KegList;
