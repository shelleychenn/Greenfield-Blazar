import React from 'react';
import Overview from './Overview.jsx';
import RelatedItemsAndComparison from './RelatedItemsAndComparison.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews.jsx';
import reviewsMetaData from '../../../_testApiData/_reviewsMetadataApi.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Overview />
        <RelatedItemsAndComparison />
        <QuestionsAndAnswers />
        <RatingsAndReviews reviewsMetaData={reviewsMetaData} />
      </>
    );
  }
}

export default App;
