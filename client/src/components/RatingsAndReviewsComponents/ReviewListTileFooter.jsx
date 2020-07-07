import React, { Component } from 'react';
import apiHelpers from '../../helpers/apiHelpers.js';
import axios from 'axios';

class ReviewListTileFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      helpfulCount: this.props.review.helpfulness,
    };
    this.incrementWasHelpfulCount = this.incrementWasHelpfulCount.bind(this);
  }

  incrementWasHelpfulCount() {
    apiHelpers.markReviewAsHelpful(this.props.review.review_id).then((data) => {
      this.setState({
        clicked: true,
        helpfulCount: this.state.helpfulCount + 1,
      });
    });
  }

  render() {
    if (!this.state.clicked) {
      console.log(this.state.helpfulCount);
      return (
        <>
          Helpful? <a onClick={this.incrementWasHelpfulCount}>Yes </a>(
          {this.state.helpfulCount}) | <a>Report</a>
        </>
      );
    } else {
      return (
        <>
          Helpful? <a>Yes </a>({this.state.helpfulCount}) | <a>Report</a>
        </>
      );
    }
  }
}

export default ReviewListTileFooter;
