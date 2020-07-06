const productReviewsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PRODUCT_REVIEWS':
      return action.payload;
    default:
      return state;
  }
}

export default productReviewsReducer;