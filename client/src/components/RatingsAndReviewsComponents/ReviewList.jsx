import React, { Component } from 'react';
import ReviewListTile from './ReviewListTile.jsx';

// input: displayed product / (product id)

class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewExist: this.props.reviews.results.length,
      reviewShown: 2,
    };
    this.loadMoreReviews = this.loadMoreReviews.bind(this);
  }

  loadMoreReviews() {
    let newCount = this.state.reviewShown;
    let reviewToLoad = this.state.reviewExist;
    this.setState({
      reviewExist: (reviewToLoad -= 2),
      reviewShown: (newCount += 2),
    });
  }

  render() {
    let button =
      this.state.reviewExist >= 2 ? (
        <button onClick={this.loadMoreReviews}>More Reviews</button>
      ) : null;

    let reviews = this.props.reviews.results.slice(0, this.state.reviewShown);

    return (
      <>
        <div className="review-list">
          {reviews.map((review) => (
            <ReviewListTile review={review} key={review.review_id} />
          ))}
        </div>
        {button}
      </>
    );
  }
}

export default ReviewList;
