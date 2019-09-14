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
    let _style = null;

    console.log(this.state.checkedRadio);
  };

  handleChange = (event) => {
    console.log(this.state.checkedRadio);
    this.setState({
      checkedRadio: event.target.value,
    });
  };

  handleNewKegFormSubmission = (event) => {
    event.preventDefault();

    let style = this.state.checkedRadio;
    let price = '';

    if (style === 'micro') {
      price = '$6.00';
    }else if (style === 'foreign') {
      price = '$8.00';
    } else {
      price = '$4.00';
    }

    this.props.onNewKegCreation({
      name: this._name.value,
      brewery: this._brewery.value,
      style: this._style.value,
      abv: this._abv.value,
      price: price,
    });

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
            htmlFor='style'>
            Style
          </label>
          <input
            type='text'
            name='style'
            id='style'
            placeholder='Style'
            required
            ref={(input) => {this._style = input;}}/>

          <br />
          <label
            htmlFor='abv'>
            ABV
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
                Import
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
