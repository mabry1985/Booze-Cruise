import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      masterKegList: [],
    };
  }

  handleAddingNewKeg = (newKeg) => {
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({ masterKegList: newMasterKegList });
  };

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
      <BrowserRouter>
      <main className="container">
      <Header />
      <Routes
        onAddingNewKeg={this.handleAddingNewKeg}
        kegList={this.state.masterKegList}
        onSellBeer={this.handleSellBeer}
        onEditKeg={this.handleEditKeg}
      />
      </main>
      </BrowserRouter>
    );
  }
};

export default App;
