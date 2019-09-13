import React from 'react';
import PropTypes from 'prop-types';

function NewKegForm(props) {
  let _name = null;
  let _brewery = null;
  let _abv = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();

    props.onNewKegCreation({
      name: _name.value,
      brewery: _brewery.value,
      abv: _abv.value,
    });

    _name.value = '';
    _brewery.value = '';
    _abv.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewKegFormSubmission}>
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
          ref={(input) => {_name = input;}} />

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
          ref={(input) => {_brewery = input;}}/>

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
          ref={(input) => {_abv = input;}}/>

          <div className="beer-type">
            <label>
              <input
                type="radio"
                name="beer-price-radio"
                value="domestic"
                checked={true}
                className="form-check-input"
              />
              Domestic
            </label>

            <label>
              <input
                type="radio"
                name="beer-price-radio"
                value="micro"
                checked={false}
                className="form-check-input"
              />
              Micro
            </label>

            <label>
              <input
                type="radio"
                name="beer-price-radio"
                value="import"
                checked={false}
                className="form-check-input"
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

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func,
};

export default NewKegForm;
