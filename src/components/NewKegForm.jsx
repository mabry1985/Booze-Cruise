import React from 'react';
import PropTypes from 'prop-types';

class NewKegForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedRadio: 'micro',
    };

    let _name = null;
    let _brewery = null;
    let _abv = null;
  };

  checkPrice = () => {
    let price = (this.state.checkedRadio == 'micro') ? 7
                : (this.state.checkedRadio == 'import') ? 8
                : 3;

    return price;
  };

  handleChange = (event) => {
    this.setState({
      checkedRadio: event.target.value,
    });
  };

  handleNewKegFormSubmission = (event) => {
    event.preventDefault();

    props.onNewKegCreation({
      name: this._name.value,
      brewery: this._brewery.value,
      abv: this._abv.value,
      price: this.checkPrice,
    });

    _name.value = '';
    _brewery.value = '';
    _abv.value = '';
  };

  render () {
    return (
      <div>
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

            <div className="beer-type">
              <label>
                <input
                  type="radio"
                  name="beer-price-radio"
                  value="domestic"
                  checked={this.state.checkedRadio === 'domestic'}
                  className="form-check-input"
                  onChange={this.handleChange}
                />
                Domestic
              </label>

              <label>
                <input
                  type="radio"
                  name="beer-price-radio"
                  value="micro"
                  checked={this.state.checkedRadio === 'micro'}
                  className="form-check-input"
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
                  className="form-check-input"
                  onChange={this.handleChange}
                />
                Foreign
              </label>
            </div>

          <br />
          <button type='submit'>Add Keg</button>
        </form>
      </div>
    );
  }
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func,
};

export default NewKegForm;
