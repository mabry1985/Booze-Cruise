import React from 'react';
import { v4 } from 'uuid';
import { connect } from 'react-redux';

class NewKegForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedRadio: 'micro',
    };

    let _name = null;
    let _brewery = null;
    let _abv = null;
    let _style = null;
  };

  handleChange = (event) => {
    this.setState({
      checkedRadio: event.target.value,
    });
  };

  handleNewKegFormSubmission = (event) => {
    const { dispatch } = this.props;
    event.preventDefault();

    let style = this.state.checkedRadio;
    let price = '';

    if (style === 'micro') {
      price = 6;
    }else if (style === 'import') {
      price = 8;
    } else {
      price = 4;
    }

    const action = {
      type: 'ADD_KEG',
      name: this._name.value,
      brewery: this._brewery.value,
      style: this._style.value,
      abv: this._abv.value,
      price: price,
      pintsLeft: 120,
      id: v4(),
    };

    dispatch(action);

    this._name.value = '';
    this._brewery.value = '';
    this._abv.value = '';
    this._style.value = '';
  };

  render () {
    return (
      <div>
        <form onSubmit={this.handleNewKegFormSubmission}>
          <label
            className='a11y'
            htmlFor='name'>
            Name
          </label>
          <input
            type='text'
            name='name'
            className='name'
            placeholder='Name'
            required
            ref={(input) => {this._name = input;}} />

          <br />
          <label
            className='a11y'
            htmlFor='brewery'>
            Brewery
          </label>
          <input
            type='text'
            name='brewery'
            className='brewery'
            placeholder='Brewery'
            required
            ref={(input) => {this._brewery = input;}}/>

          <br />
          <label
            className='a11y'
            htmlFor='style'>
            Style
          </label>
          <input
            type='text'
            name='style'
            className='style'
            placeholder='Style'
            required
            ref={(input) => {this._style = input;}}/>

          <br />
          <label
            className='a11y'
            htmlFor='abv'>
            ABV
          </label>
          <input
            type='text'
            name='abv'
            className='abv'
            placeholder='ABV'
            required
            ref={(input) => {this._abv = input;}}/>

            <br />
              <label>
                <input
                  type="radio"
                  value="domestic"
                  checked={this.state.checkedRadio === 'domestic'}
                  onChange={this.handleChange}
                />
                Domestic
              </label>

              <label>
                <input
                  type="radio"
                  value="micro"
                  checked={this.state.checkedRadio === 'micro'}
                  onChange={this.handleChange}
                />
                Micro
              </label>

              <label>
                <input
                  type="radio"
                  name="beer-price-radio"
                  value="import"
                  checked={this.state.checkedRadio === 'import'}
                  onChange={this.handleChange}
                />
                Import
              </label>
          <br />
          <button type='submit'>Add Keg</button>
        </form>
      </div>
    );
  }
}

export default connect()(NewKegForm);
