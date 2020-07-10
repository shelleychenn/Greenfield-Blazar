const productReviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PRODUCT_REVIEWS': {
      return {
        ...state,
        reviews: action.payload,
      };
    }

    case 'SET_PRODUCT_REVIEWS_METADATA': {
      return {
        ...state,
        reviewsMetaData: action.payload,
      };
    }

    case 'POST_NEW_REVIEWS': {
      return {
        ...state,
        reviews: [action.payload, ...state.reviews],
      };
    }

    default:
      return state;
  }
};

export default productReviewsReducer;
