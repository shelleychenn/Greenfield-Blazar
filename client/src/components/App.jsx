import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './Overview.jsx';
import RelatedItemsAndComparison from './RelatedItemsAndComparison.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews.jsx';
// Dummy data files below:
import reviews from '../../../_testApiData/_reviewsApi.js';
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
        <div className="ratings-and-reviews">
          <RatingsAndReviews
            reviews={reviews}
            reviewsMetaData={reviewsMetaData}
          />
        </div>
      </>
    );
  }
}

export default App;
