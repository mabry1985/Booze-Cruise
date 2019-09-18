import React from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './components/Routes';
import Header from './components/Header';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      masterKegList: [],
    };
  }

  handleEditKeg = (updatedKeg) => {
    this.setState(state => {
      const kegArray = state.masterKegList.map((keg) => {
        if (keg.id === updatedKeg.id) {
          keg.name = updatedKeg.name;
          keg.brewery = updatedKeg.style;
          keg.style = updatedKeg.style;
          keg.abv = updatedKeg.abv;
          keg.price = updatedKeg.price;
          keg.pintsLeft = updatedKeg.pintsLeft;
        }
      });
    });
  };

  handleSellBeer = (id) => {
    this.setState(state => {
      const kegArray = state.masterKegList.map((keg) => {
        if (keg.id === id) {
          keg.pintsLeft -= 1;
          return keg;
        } else {
          return keg;
        }
      });
      return {
        kegArray,
      };
    });
  };

  render() {
    return (
      <main className="container">
      <Header />
      <Routes
        kegList={this.props.masterKegList}
        onSellBeer={this.handleSellBeer}
        onEditKeg={this.handleEditKeg}
      />
      </main>
    );
  }
};

App.propTypes = {
  masterTicketList: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    masterKegList: state,
  };
};

export default withRouter(connect(mapStateToProps)(App));
