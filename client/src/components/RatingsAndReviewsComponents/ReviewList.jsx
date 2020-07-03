import React, { Component } from 'react';
import ReviewListTile from './ReviewListTile.jsx';

// input: displayed product / (product id)

class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewExist: this.props.reviews.results.length,
      reviewShown: 2,
      totalReviewCount: this.props.reviews.results.length,
      sortingRule: 'Relevant',
    };
    this.loadMoreReviews = this.loadMoreReviews.bind(this);
    this.handleSortingChange = this.handleSortingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  loadMoreReviews() {
    let newCount = this.state.reviewShown;
    let reviewToLoad = this.state.reviewExist;
    this.setState({
      reviewExist: (reviewToLoad -= 2),
      reviewShown: (newCount += 2),
    });
  }

  handleSortingChange(e) {
    this.setState({
      sortingRule: e.target.value,
    });
  }

  handleSubmit(e) {
    console.log('request submitted');
    e.preventDefault();
    // change review list by making a request with this.state.sortingRule
    this.props.handleSortChoice(this.state.sortingRule);
  }

  render() {
    let button =
      this.state.reviewExist >= 2 ? (
        <button onClick={this.loadMoreReviews}>More Reviews</button>
      ) : null;

    let reviews = this.props.reviews.results.slice(0, this.state.reviewShown);

    return (
      <>
        <div className="sorting-choices">
          <form onSubmit={this.handleSubmit}>
            <label>{this.state.totalReviewCount} reviews, sorted by </label>
            <select
              value={this.state.sortingRule}
              onChange={this.handleSortingChange}
            >
              <option value="Relevant">Relevant</option>
              <option value="Helpful">Helpful</option>
              <option value="Newest">Newest</option>
            </select>
          </form>
        </div>

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
