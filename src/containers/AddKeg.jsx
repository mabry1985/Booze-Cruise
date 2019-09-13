import React from 'react';
import NewKegForm from '../components/NewKegForm';
import PropTypes from 'prop-types';

const AddKeg = (props) => (
  <div>
    <h2>Add a Keg</h2>
    <NewKegForm onNewKegCreation={props.onNewKegCreation}/>
  </div>
);

AddKeg.propTypes = {
  onNewKegCreation: PropTypes.func,
};

export default AddKeg;
