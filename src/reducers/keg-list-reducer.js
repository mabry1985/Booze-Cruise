const kegListReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_KEG':
      return state.concat([action.data]);
    case 'SELL_BEER':
      console.log('in sell_beer', state, action.id);
      return state.map((keg) => {
        if (keg.id === action.id) {
          return {
            ...keg,
            pintsLeft: keg.pintsLeft - 1,
          };
        } else return post;
      });
    default:
      return state;
  }
};

export default kegListReducer;
