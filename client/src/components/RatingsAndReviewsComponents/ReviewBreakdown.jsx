import React, { Component } from 'react';
import RatingSummary from './RatingSummary.jsx';
import RatingBar from './RatingBar.jsx';
import { connect } from 'react-redux';
import { setProductReviews } from '../../actions';

class ReviewBreakdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterClicked: false,
    };
    this.getAverageRating = this.getAverageRating.bind(this);
    this.getRatingPercentage = this.getRatingPercentage.bind(this);
    this.getRecommendedPercentage = this.getRecommendedPercentage.bind(this);
    this.getCharacteristicAverage = this.getCharacteristicAverage.bind(this);
  }

  getAverageRating(ratings) {
    let sum = 0;
    let result = {
      average: null,
      count: 0,
    };

    for (let key in ratings) {
      result.count += ratings[key];
      sum += key * ratings[key];
    }

    result.average = Math.round((sum / result.count) * 10) / 10;
    return result;
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
    let totalRecommended;
    if (metaData.recommended[1] === undefined) {
      totalRecommended = 0;
    } else {
      totalRecommended = metaData.recommended[1];
    }

    let totalReview =
      (metaData.recommended[0] || 0) + (metaData.recommended[1] || 0);

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
          <div className="review-rating-bars-bar" key={i}>
            <div
              className="review-rating-bars-bar-label"
              onClick={() => {
                this.props.handleStarFilter(i);
              }}
            >
              {i} Stars
            </div>
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

    const traitMeaning = {
      Size: ['too small', 'too big'],
      Width: ['too narrow', 'too wide'],
      Comfort: ['uncomfortable', 'perfect'],
      Quality: ['poor', 'great'],
      Length: ['too short', 'too long'],
      Fit: ['too tight', 'too loose'],
    };

    const productBreakdownBar = (characteristics) => {
      let productBars = [];
      for (let trait in characteristics) {
        productBars.push(
          <div className="review-product-bar" key={trait}>
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
            <div className="review-product-bar-text">
              <p>{traitMeaning[trait][0]}</p>
              <p>{traitMeaning[trait][1]}</p>
            </div>
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
          averageRating={
            this.getAverageRating(this.props.reviewsMetaData.ratings).average
          }
          reviewCounts={
            this.getAverageRating(this.props.reviewsMetaData.ratings).count
          }
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
        <br />
        <div
          className="review-remove-filter"
          onClick={() => {
            this.props.handleStarFilter(null);
          }}
        >
          Remove all filters
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

export default connect()(ReviewBreakdown);
