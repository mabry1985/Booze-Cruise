import React from 'react';
import PropTypes from 'prop-types';
import BeerList from '../containers/Beerlist.jsx';

function Admin(props) {
  console.log('this is coming from Admin' + props.kegList);
  return (
    <div>
      <h2>Admin</h2>
      <BeerList
        kegList={props.kegList} />
    </div>
  );
}

Admin.propTypes = {
  kegList: PropTypes.array,
};

export default Admin;
