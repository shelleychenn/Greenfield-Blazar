import React, { Component } from 'react';
import ReviewList from './RatingsAndReviewsComponents/ReviewList.jsx';

class RatingsAndReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
    };
    this.handleSortChoice = this.handleSortChoice.bind(this);
  }

  handleSortChoice(option) {
    // if (option === 'Relevant') {
    //   this.state.reviews.results.sort((a, b) => {
    //     return reviews;
    //   });
    // }
    // if (option === 'Helpful') {
    //   let sorted = this.state.reviews.results.sort((a, b) => {
    //     return a.helpfulness - b.helpfulness;
    //   });
    //   this.setState({
    //     reviews: sorted,
    //   });
    // }
    // if (option === 'Newest') {
    //   let sorted = this.state.reviews.results.sort((a, b) => {
    //     return a.date - b.date;
    //   });
    //   this.setState({
    //     reviews: sorted,
    //   });
    // }
  }

  render() {
    return (
      <div className="ratings-and-reviews-container">
        <ReviewList
          reviews={this.state.reviews}
          handleSortChoice={this.handleSortChoice}
        />
      </div>
    );
  }
}

export default RatingsAndReviews;

// const handleSortChoice = (option) => {
//   if (option === 'Relevant')
//     reviews.results.sort((a, b) => {
//       return reviews;
//     });
//   if (option === 'Helpful')
//     reviews.results.sort((a, b) => {
//       return a.helpfulness - b.helpfulness;
//     });
//   if (option === 'Newest')
//     reviews.results.sort((a, b) => {
//       return a.date - b.date;
//     });
// };
