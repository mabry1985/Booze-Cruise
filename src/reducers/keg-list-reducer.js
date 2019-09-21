const kegListReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_KEG':
      return state.concat([action.data]);
    case 'EDIT_BEER':
      return state.map((keg)=>keg.id === action.id ? { ...keg, editing: !keg.editing } : keg);
    case 'SELL_BEER':
      console.log('in sell_beer', state, action.id);
      return state.map((keg) => {
        if (keg.id === action.id) {
          return {
            ...keg,
            pintsLeft: keg.pintsLeft - 1,
          };
        } else return keg;
      });
    default:
      return state;
  }
};

export default kegListReducer;
