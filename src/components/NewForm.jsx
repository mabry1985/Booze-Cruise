import React from 'react';

function NewForm() {
  return (
    <div>
      <form>
        <input
          type='text'
          id='names'
          placeholder='Name'/>
        <br />
        <input
          type='text'
          id='brewery'
          placeholder='Brewery'/>
        <br />
        <input
          id='abv'
          placeholder='ABV'/>
        <br />
        <button type='submit'>Add Keg</button>
      </form>
    </div>
  );
}

export default NewForm;
