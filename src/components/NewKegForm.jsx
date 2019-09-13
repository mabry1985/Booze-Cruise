import React from 'react';
import PropTypes from 'prop-types';

class NewKegForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedRadio: 'micro',
    };

  };

  _name = null;
  _brewery = null;
  _abv = null;

  handleChange = (event) => {
    this.setState({
      checkedRadio: event.target.value,
    });
  };

  handleNewKegFormSubmission = (event) => {
    event.preventDefault();

    this.props.onNewKegCreation({
      name: this._name.value,
      brewery: this._brewery.value,
      abv: this._abv.value,
      price: this._price.value,
      pintsLeft: 120,
    });

    this._name.value = '';
    this._brewery.value = '';
    this._abv.value = '';
    this._price.value = '';
  };

  render () {
    return (
      <React.Fragment>
        <form onSubmit={this.handleNewKegFormSubmission}>
          <label
            htmlFor='name'>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            required
            ref={(input) => {this._name = input;}} />

          <br />
          <label
            htmlFor='brewery'>
            Brewery
          </label>
          <input
            type='text'
            name='brewery'
            id='brewery'
            placeholder='Brewery'
            required
            ref={(input) => {this._brewery = input;}}/>

          <br />
          <label
            htmlFor='abv'>
            Name
          </label>
          <input
            type='text'
            name='abv'
            id='abv'
            placeholder='ABV'
            required
            ref={(input) => {this._abv = input;}}/>

            <br />
            <label
              htmlFor='price'>
              Name
            </label>
            <input
              type='text'
              name='price'
              id='price'
              placeholder='price'
              required
              ref={(input) => {this._price = input;}}/>

          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value="domestic"
                  checked={this.state.checkedRadio === 'domestic'}
                  onChange={this.handleChange}
                />
                Domestic
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="micro"
                  checked={this.state.checkedRadio === 'micro'}
                  onChange={this.handleChange}
                />
                Micro
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  name="beer-price-radio"
                  value="import"
                  checked={this.state.checkedRadio === 'import'}
                  onChange={this.handleChange}
                />
                Foreign
              </label>
            </li>
          </ul>

          <br />
          <button type='submit'>Add Keg</button>
        </form>
      </React.Fragment>
    );
  }
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func,
};

export default NewKegForm;
