import React from 'react';

function NewForm() {
  return (
    <div>
      <form>
        <label
          className='access-labels'
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
          className='access-labels'
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
          className='access-labels'
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
