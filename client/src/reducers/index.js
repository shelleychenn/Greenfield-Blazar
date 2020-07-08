import productStylesReducer from './productStyles.js';
import selectedStyleReducer from './selectedStyle.js';
import productInfoReducer from './productInfo.js';
import productReviewsReducer from './productReviews.js';
import isExpandedViewReducer from './isExpandedView.js';
import createNewReviewReducer from './newReview';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  productStyles: productStylesReducer,
  selectedStyle: selectedStyleReducer,
  productInfo: productInfoReducer,
  productReviews: productReviewsReducer,
  isExpandedView: isExpandedViewReducer,
  newReview: createNewReviewReducer,
});

export default rootReducer;
