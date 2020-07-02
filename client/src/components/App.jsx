import React from 'react';
import RatingsAndReviews from './RatingsAndReviews.jsx';
import reviews from '../../../_testApiData/_reviewsApi.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { name } = this.props;
    return (
      <>
        <div className="ratings-and-reviews">
          <RatingsAndReviews reviews={reviews} />
        </div>
      </>
    );
  }
}

export default App;
