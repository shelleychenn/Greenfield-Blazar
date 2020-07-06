import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductStyles, setSelectedStyle } from '../actions/';
import apiHelpers from '../helpers/apiHelpers.js';

import Overview from './Overview.jsx';
import RelatedItemsAndComparison from './RelatedItemsAndComparison.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews.jsx';

const App = () => {

  const productStyles = useSelector((state) => state.productStyles);
  const dispatch = useDispatch();

  // using random product id to start with
  let productId = 5;
  useEffect(() => {
    apiHelpers.getProductStyles(productId)
    .then(({data}) => {
      dispatch(setProductStyles(data.results));
      dispatch(setSelectedStyle(data.results[0]));
    })
    .catch((err) => {
      console.log('ISSUE FETCHING PRODUCT STYLES');
    })
  }, [productId]);

    return (
      <>
        <Overview />
        <RelatedItemsAndComparison />
        <QuestionsAndAnswers />
        <RatingsAndReviews />
      </>
    );
}

export default App;