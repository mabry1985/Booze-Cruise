import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Header from './Header';

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

  render() {
    return (
      <BrowserRouter>
      <main className="container">
      <Header />
      <Routes
        onAddingNewKeg={this.handleAddingNewKeg}
        kegList={this.state.masterKegList}
      />
      </main>
      </BrowserRouter>
    );
  }
};

export default App;
