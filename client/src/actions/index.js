export const setProductStyles = (styles) => {
  return {
    type: 'SET_PRODUCT_STYLES',
    payload: styles,
  };
};

export const setSelectedStyle = (style) => {
  return {
    type: 'SET_SELECTED_STYLE',
    payload: style,
  };
};

export const setProductInfo = (info) => {
  return {
    type: 'SET_PRODUCT_INFO',
    payload: info,
  };
};

export const setProductReviews = (reviews) => {
  return {
    type: 'SET_PRODUCT_REVIEWS',
    payload: reviews,
  };
};

export const setProductReviewsMetaData = (reviewsMetaData) => {
  return {
    type: 'SET_PRODUCT_REVIEWS_METADATA',
    payload: reviewsMetaData,
  };
};

export const postNewReview = (newReview) => {
  return {
    type: 'POST_NEW_REVIEWS',
    payload: newReview,
  };
};

export const toggleIsExpandedView = () => {
  return {
    type: 'TOGGLE_IS_EXPANDED_VIEW',
  };
};

export const setProductId = (id) => {
  return {
    type: 'SET_PRODUCT_ID',
    payload: id,
  };
};