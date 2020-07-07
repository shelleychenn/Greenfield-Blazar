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

    case 'UPDATE_REVIEW_HELPFULNESS': {
      let review_id = action.payload;
      const { reviews } = state;
      const updateReviews = reviews.map((review) => {
        if (review.reviewId === review_id) {
          return {
            ...review,
            helpfulness: review.helpfulness + 1,
          };
        }
        return { ...review };
      });
      return {
        ...state,
        reviews: updateReviews,
      };
    }

    default:
      return state;
  }
};

export default productReviewsReducer;
