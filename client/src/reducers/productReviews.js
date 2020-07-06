const productReviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PRODUCT_REVIEWS': {
      // console.log(action.payload);
      return {
        ...state,
        reviews: action.payload,
      };
    }

    case 'SET_PRODUCT_REVIEWS_METADATA': {
      // console.log(action.payload);
      return {
        ...state,
        reviewsMetaData: action.payload,
      };
    }

    default:
      return state;
  }
};

export default productReviewsReducer;
