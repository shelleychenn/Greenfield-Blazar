const selectedStyleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SELECTED_STYLE':
      return action.payload;
    default:
      return state;
  }
}

export default selectedStyleReducer;