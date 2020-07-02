import React, { Component } from 'react';

class SubmittedImages extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.review.photos.length > 0) {
      return (
        <div>
          {this.props.review.photos.map((photo) => (
            <img
              alt="review image"
              src={photo.url}
              className="review-tile-image"
              key={photo.id}
            ></img>
          ))}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default SubmittedImages;
