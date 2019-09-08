import React from 'react';

function NewKegForm() {
  return (
    <div>
      <form>
        <label
          htmlFor='name'>
          Name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Name'
          required />
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
          required />
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
          required />
        <br />
        <button type='submit'>Add Keg</button>
      </form>
    </div>
  );
}

export default NewForm;
