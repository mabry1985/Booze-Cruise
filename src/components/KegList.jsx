import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';
import { connect } from 'react-redux';

class KegList extends React.Component {
  render() {
    return (
      <div>
        <hr/>
        {this.props.kegs.kegListReducer.map((keg) => (
          <div key={keg.id}>
          <Keg keg={keg} key={keg.id} />
          </div>
        ))}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    kegs: state,
  };
};

KegList.propTypes = {
  kegList: PropTypes.object,
  onSellBeer: PropTypes.func,
  onEditKeg: PropTypes.func,
};

export default connect(mapStateToProps)(KegList);
