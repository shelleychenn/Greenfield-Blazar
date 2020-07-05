import React, { Component } from 'react';
import ReviewList from './RatingsAndReviewsComponents/ReviewList.jsx';
import ReviewBreakdown from './RatingsAndReviewsComponents/ReviewBreakdown.jsx';

class RatingsAndReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
    };
    this.handleSortChoice = this.handleSortChoice.bind(this);
  }

  handleSortChoice(option) {
    console.log(option);
    let copy = [...this.state.reviews.results];
    if (option === 'Relevant') {
      this.state.reviews.results.sort((a, b) => {
        // TODO:
        return reviews;
      });
    }
    if (option === 'Helpful') {
      copy = copy.sort((a, b) => {
        return b.helpfulness - a.helpfulness;
      });
      this.setState({
        reviews: { ...this.state.reviews, results: copy },
      });
    }
    if (option === 'Newest') {
      copy = copy.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      this.setState({
        reviews: { ...this.state.reviews, results: copy },
      });
    }
  }

  render() {
    return (
      <div className="ratings-and-reviews-container">
        {/* Left side: ReviewBreakdown goes here */}
        <ReviewBreakdown reviewsMetaData={this.props.reviewsMetaData} />

        {/* Right side: ReviewList goes here */}
        <ReviewList
          reviews={this.state.reviews}
          handleSortChoice={this.handleSortChoice}
        />
      </div>
    );
  }
}

export default RatingsAndReviews;
