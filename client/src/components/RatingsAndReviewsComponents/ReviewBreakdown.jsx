import React, { Component } from 'react';
import RatingSummary from './RatingSummary.jsx';
import RatingBar from './RatingBar.jsx';

class ReviewBreakdown extends Component {
  constructor(props) {
    super(props);
    this.getAverageRating = this.getAverageRating.bind(this);
    this.getRatingPercentage = this.getRatingPercentage.bind(this);
  }

  getAverageRating(ratings) {
    let sum = 0;
    let counts = Object.keys(ratings).length;
    for (let key in ratings) {
      sum += ratings[key];
    }
    return Math.round((sum / counts) * 10) / 10;
  }

  getRatingPercentage(targetStar, ratingData) {
    let counts = {
      totalRatingCount: Object.keys(ratingData).length,
      targetStarCount: 0,
      percentage: 0,
    };

    for (let key in ratingData) {
      if (ratingData[key] === targetStar) {
        counts.targetStarCount++;
      }
    }
    counts.percentage =
      (counts.targetStarCount / counts.totalRatingCount) * 100;
    return counts;
  }

  render() {
    const ratingBars = () => {
      let bars = [];
      for (let i = 1; i <= 5; i++) {
        bars.push(
          <div className="review-rating-bars-bar">
            <div className="review-rating-bars-bar-label">{i} Stars</div>
            <RatingBar
              percentage={
                this.getRatingPercentage(i, this.props.reviewsMetaData.ratings)
                  .percentage
              }
            />
            {
              this.getRatingPercentage(i, this.props.reviewsMetaData.ratings)
                .targetStarCount
            }
          </div>
        );
      }
      return bars;
    };

    let bars = ratingBars();

    return (
      <div className="review-breakdown">
        <RatingSummary
          averageRating={this.getAverageRating(
            this.props.reviewsMetaData.ratings
          )}
          reviewCounts={Object.keys(this.props.reviewsMetaData.ratings).length}
        />
        <div className="review-rating-bars">
          <p>Rating Breakdown</p>
          {bars.map((bar) => {
            return bar;
          })}
        </div>
      </div>
    );
  }
}

export default ReviewBreakdown;
