const productInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PRODUCT_INFO':
      return action.payload;
    default:
      return state;
  }
}

export default productInfoReducer;