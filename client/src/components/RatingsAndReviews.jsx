import React, { Component } from 'react';
import RatingSummary from './RatingsAndReviewsComponents/RatingSummary.jsx';

class RatingsAndReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getAverageRating = this.getAverageRating.bind(this);
  }

  getAverageRating(ratings) {
    let sum = 0;
    let counts = Object.keys(ratings).length;
    for (let key in ratings) {
      sum += ratings[key];
    }
    return Math.round((sum / counts) * 10) / 10;
  }

  render() {
    return (
      <div className="ratings-and-reviews-container">
        {/* ReviewList goes here */}
        <RatingSummary
          averageRating={this.getAverageRating(
            this.props.reviewsMetaData.ratings
          )}
        />
      </div>
    );
  }
}

export default RatingsAndReviews;
