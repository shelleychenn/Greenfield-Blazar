import React, { Component } from 'react';

class ReviewListTileFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wasHelpfulCount: this.props.review.helpfulness,
    };
  }

  incrementWasHelpfulCount() {
    this.setState({});
  }

  render() {
    return '';
  }
}

export default ReviewListTileFooter;
