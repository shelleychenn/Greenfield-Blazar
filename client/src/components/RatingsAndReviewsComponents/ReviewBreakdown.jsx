import React, { Component } from 'react';
import RatingSummary from './RatingSummary.jsx';

class ReviewBreakdown extends Component {
  constructor(props) {
    super(props);
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
      <div className="review-breakdown">
        <RatingSummary
          averageRating={this.getAverageRating(
            this.props.reviewsMetaData.ratings
          )}
          reviewCounts={Object.keys(this.props.reviewsMetaData.ratings).length}
        />
      </div>
    );
  }
}

export default ReviewBreakdown;
