import React, { Component } from 'react';

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
    let newCount = this.state.helpfulCount + 1;
    this.setState({
      clicked: true,
      helpfulCount: newCount,
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
