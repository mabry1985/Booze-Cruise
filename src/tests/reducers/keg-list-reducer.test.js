import kegListReducer from '../../reducers/keg-list-reducer.js';
import { v4 } from 'uuid';

describe('kegListReducer', () => {

  let action;
  const sampleKegData = {
    name: 'Superfuzz',
    abv: 6.3,
    brewery: 'Elysian',
    price: 7,
    pintsLeft: 120,
    id: v4(),

  };

  test('Should return default state if no action type is recognized', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, abv, brewery, price, pintsLeft, id } = sampleKegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      abv: abv,
      brewery: brewery,
      price: price,
      pintsLeft: pintsLeft,
      id: id,
    };
    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        abv: abv,
        brewery: brewery,
        price: price,
        pintsLeft: pintsLeft,
        id: id,
      },
    });
  });
});
