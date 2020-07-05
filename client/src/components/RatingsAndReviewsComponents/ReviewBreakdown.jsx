import React, { Component } from 'react';
import RatingSummary from './RatingSummary.jsx';
import RatingBar from './RatingBar.jsx';

class ReviewBreakdown extends Component {
  constructor(props) {
    super(props);
    this.getAverageRating = this.getAverageRating.bind(this);
    this.getRatingPercentage = this.getRatingPercentage.bind(this);
    this.getRecommendedPercentage = this.getRecommendedPercentage.bind(this);
    this.getCharacteristicAverage = this.getCharacteristicAverage.bind(this);
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
  }

  getRecommendedPercentage(metaData) {
    let totalRecommended = Object.values(metaData.recommended)[0];
    let totalReview = 0;
    for (let key in metaData.ratings) {
      totalReview += metaData.ratings[key];
    }
    let percentage = (totalRecommended / totalReview) * 100;
    return Math.round(percentage * 10) / 10;
  }

  getCharacteristicAverage(characteristic) {
    let trait = {};
    let value = Number(characteristic.value);
    let percentage = (value / 5) * 100;
    trait[characteristic] = percentage;
    return trait;
  }

  render() {
    const ratingBars = () => {
      let bars = [];
      for (let i = 5; i >= 1; i--) {
        bars.push(
          <div className="review-rating-bars-bar">
            <div className="review-rating-bars-bar-label">{i} Stars</div>
            <RatingBar
              bgcolor="#60b960ba"
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

    const productBreakdownBar = (characteristics) => {
      let productBars = [];
      for (let trait in characteristics) {
        productBars.push(
          <div className="review-product-bar">
            {trait}
            <RatingBar
              bgcolor="#ebebeb"
              percentage={
                Object.values(
                  this.getCharacteristicAverage(characteristics[trait])
                )[0]
              }
              icon="▼"
            />
          </div>
        );
      }
      return productBars;
    };

    let productBars = productBreakdownBar(
      this.props.reviewsMetaData.characteristics
    );

    return (
      <div className="review-breakdown">
        <RatingSummary
          averageRating={this.getAverageRating(
            this.props.reviewsMetaData.ratings
          )}
          reviewCounts={Object.keys(this.props.reviewsMetaData.ratings).length}
        />

        <p className="review-%recommend">
          {this.getRecommendedPercentage(this.props.reviewsMetaData)}% of
          reviews recommend this product
        </p>

        <div className="review-rating-bars">
          {bars.map((bar) => {
            return bar;
          })}
        </div>

        <div className="review-product-breakdown">
          {productBars.map((bar) => {
            return bar;
          })}
        </div>
      </div>
    );
  }
}

export default ReviewBreakdown;
