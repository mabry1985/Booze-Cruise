import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Header from './Header';
import socketIOClient from 'socket.io-client';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      masterKegList: [],
      endpoint: 'http://2601:1c2:0:d85a:eced:7bfc:29df:27c7:4001',
    };
  }

  componentDidMount = () => {
    const socket = socketIOClient(this.state.endpoint);
    setInterval(this.handleSend(), 1000);
    socket.on('update list', (list) => {
        this.setState(state => {
          this.state.masterKegList = list;
        });
      });
  };

  handleSend = () => {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('update list', this.state.masterKegList);
  };

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

  handleDeleteKeg = (id) => {
    let kegArray = this.state.masterKegList.slice();
    this.setState(state => {
      const list = kegArray.filter(item => item.id !== id);
      this.state.masterKegList = list;

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
    const socket = socketIOClient(this.state.endpoint);

    return (
      <BrowserRouter>
      <main className="container">
      <Header onSend={this.handleSend}/>
      <Routes
        onAddingNewKeg={this.handleAddingNewKeg}
        kegList={this.state.masterKegList}
        onSellBeer={this.handleSellBeer}
        onEditKeg={this.handleEditKeg}
        onDeleteKeg={this.handleDeleteKeg}
        onSend={this.handleSend}
      />
      </main>
      </BrowserRouter>
    );
  }
};

export default App;
