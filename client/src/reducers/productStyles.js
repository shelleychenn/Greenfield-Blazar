const productStylesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PRODUCT_STYLES':
      return action.payload;
    default:
      return state;
  }
};

export default productStylesReducer;