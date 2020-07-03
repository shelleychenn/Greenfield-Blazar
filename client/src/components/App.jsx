import React from "react";
import Overview from './Overview.jsx';
import RelatedItemsAndComparison from './RelatedItemsAndComparison.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <>
        <Overview />
        <RelatedItemsAndComparison />
        <QuestionsAndAnswers />
        <RatingsAndReviews />
      </>
    );
  }
}

export default App;