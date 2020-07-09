// import ReactDOM from 'react-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setProductStyles,
  setSelectedStyle,
  setProductInfo,
  setProductReviews,
  setProductReviewsMetaData,
} from '../actions/';
import apiHelpers from '../helpers/apiHelpers.js';

import Header from './Header.jsx';
import Overview from './Overview.jsx';
import RelatedItemsAndComparison from './RelatedItemsAndComparison.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews.jsx';
import Footer from './Footer.jsx';
// Dummy data files below:
import reviews from '../../../_testApiData/_reviewsApi.js';
import reviewsMetaData from '../../../_testApiData/_reviewsMetadataApi.js';

const App = () => {
  const productStyles = useSelector((state) => state.productStyles);
  const productId = useSelector((state) => state.productId);
  const dispatch = useDispatch();

  useEffect(() => {
    apiHelpers
      .getProductStyles(productId)
      .then(({ data }) => {
        dispatch(setProductStyles(data.results));
        dispatch(setSelectedStyle(data.results[0]));
      })
      .catch((err) => {
        console.log('ISSUE FETCHING PRODUCT STYLES');
      });

    apiHelpers
      .getProductInformation(productId)
      .then(({ data }) => dispatch(setProductInfo(data)))
      .catch((err) => {
        console.log('ISSUE FETCHING PRODUCT INFO');
      });

    apiHelpers
      .getProductReviews(productId)
      .then(({ data }) => dispatch(setProductReviews(data.results)))
      .catch((err) => {
        console.log('ISSUE FETCHING PRODUCT REVIEWS');
      });

    apiHelpers
      .getProductReviewsMetadata(productId)
      .then(({ data }) => dispatch(setProductReviewsMetaData(data)))
      .catch((err) => {
        console.log('ISSUE FETCHING PRODUCT REVIEWS');
      });
  }, [productId]);

    return (
      <>
         <Header />
        <Overview /> 
        <RelatedItemsAndComparison />
        <QuestionsAndAnswers /> 
         <RatingsAndReviews />
        <Footer />
      </>
    );
}

export default App;