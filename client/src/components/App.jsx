import React from 'react';
import ReviewList from './ReviewList.jsx';
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
        <h1>Hello World!</h1>
        <div className="ratings-and-reviews">
          <ReviewList reviews={reviews} />
        </div>
      </>
    );
  }
}

export default App;
