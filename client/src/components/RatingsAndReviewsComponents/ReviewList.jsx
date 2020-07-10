import React, { Component } from 'react';
import ReviewListTile from './ReviewListTile.jsx';
import AddReview from './AddReview.jsx';
import apiHelpers from '../../helpers/apiHelpers.js';
import { connect } from 'react-redux';
import { setProductReviews } from '../../actions';

class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewExist: this.props.reviews.length,
      reviewShown: 2,
      totalReviewCount: this.props.reviews.length,
      sortingRule: 'relevant',
      isLoadMoreClicked: false,
    };
    this.loadMoreReviews = this.loadMoreReviews.bind(this);
    this.handleSortingChange = this.handleSortingChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      reviewShown: prevState.reviewShown,
      totalReviewCount: nextProps.reviews.length,
      sortingRule: prevState.sortingRule,
    };
  }

  loadMoreReviews() {
    let newCount = this.state.reviewShown;
    let reviewToLoad = this.state.reviewExist;
    this.setState({
      isLoadMoreClicked: true,
      reviewExist: (reviewToLoad -= 2),
      reviewShown: (newCount += 2),
    });
  }

  handleSortingChange(e) {
    this.setState({
      sortingRule: e.target.value,
    });
    apiHelpers
      .sortReviews(this.props.reviewsMetaData.product_id, e.target.value)
      .then(({ data }) => {
        this.props.dispatch(setProductReviews(data.results));
      });
  }

  render() {
    let button =
      this.state.reviewExist <= 2 || this.state.totalReviewCount <= 2 ? null : (
        <button onClick={ this.loadMoreReviews }>More Reviews</button>
      );

    let reviews = this.props.reviews.slice(0, this.state.reviewShown);
    return (
      <>
        <div className="sorting-choices">
          <form>
            <label>{this.state.totalReviewCount} reviews, sorted by </label>
            <select
              value={this.state.sortingRule}
              onChange={this.handleSortingChange}
            >
              <option value="relevant">Relevant</option>
              <option value="helpful">Helpful</option>
              <option value="newest">Newest</option>
            </select>
          </form>
        </div>

        <div className={this.state.isLoadMoreClicked ? "review-list review-list-clicked" : "review-list"}>
          {reviews.map((review) => (
            <ReviewListTile review={review} key={review.review_id} />
          ))}
        </div>
        <div className="review-list-buttons">
          <div className="left-button"> {button}</div>
          <div className="right-button">
            <AddReview reviewsMetaData={this.props.reviewsMetaData} />
          </div>
        </div>
      </>
    );
  }
}

export default connect()(ReviewList);
