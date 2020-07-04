import React, { Component } from 'react';
import RatingSummary from './RatingSummary.jsx';
import RatingBar from './RatingBar.jsx';

class ReviewBreakdown extends Component {
  constructor(props) {
    super(props);
    this.getAverageRating = this.getAverageRating.bind(this);
    this.getRatingPercentage = this.getRatingPercentage.bind(this);
    this.getRecommendedPercentage = this.getRecommendedPercentage.bind(this);
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
      totalRatingCount: 0,
      targetStarCount: 0,
      percentage: 0,
    };

    if (ratingData[targetStar] === undefined) {
      counts.percentage = 0;
    } else {
      counts.targetStarCount = ratingData[targetStar];

      for (let key in ratingData) {
        counts.totalRatingCount += ratingData[key];
      }

      counts.percentage =
        (counts.targetStarCount / counts.totalRatingCount) * 100;
    }
    return counts;
    // let counts = {
    //   totalRatingCount: Object.keys(ratingData).length,
    //   targetStarCount: 0,
    //   percentage: 0,
    // };

    // for (let key in ratingData) {
    //   if (ratingData[key] === targetStar) {
    //     counts.targetStarCount++;
    //   }
    // }
    // counts.percentage =
    //   (counts.targetStarCount / counts.totalRatingCount) * 100;
    // return counts;
  }

  getRecommendedPercentage(metaData) {
    let percentage =
      (Object.values(metaData.recommended)[0] /
        Object.keys(metaData.ratings).length) *
      100;
    return Math.round(percentage * 10) / 10;
  }

  getCharacteristicAverage(characteristics) {
    let storage = {};
    for (let trait in characteristics) {
      let percentage = characteristics[trait].value / 5;
      let rounded = Math.round(percentage * 10) / 10;
      storage[trait] = rounded;
    }
    return storage;
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
        <p>
          {this.getRecommendedPercentage(this.props.reviewsMetaData)}% of
          reviews recommend this product
        </p>
        <div className="review-product-breakdown">
          <RatingBar />
        </div>
      </div>
    );
  }
}

export default ReviewBreakdown;
