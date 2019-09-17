export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_KEG':
      const { name, abv, brewery, price, pintsLeft, id } = action;
      let newState = Object.assign({}, state, {
        [id]: {
          name: name,
          abv: abv,
          brewery: brewery,
          price: price,
          pintsLeft: pintsLeft,
          id: id,
        },
      });
      return newState;
    default:
      return state;
  }
};
