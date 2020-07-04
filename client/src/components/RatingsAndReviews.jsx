import React, { Component } from 'react';
import ReviewBreakdown from './RatingsAndReviewsComponents/ReviewBreakdown.jsx';

class RatingsAndReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ratings-and-reviews-container">
        {/* Left side: ReviewBreakdown goes here */}
        <ReviewBreakdown reviewsMetaData={this.props.reviewsMetaData} />

        {/* Right side: ReviewList goes here */}
      </div>
    );
  }
}

export default RatingsAndReviews;
