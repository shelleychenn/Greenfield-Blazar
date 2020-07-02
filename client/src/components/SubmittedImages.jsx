import React, { Component } from 'react';
import SubmittedImage from './SubmittedImage.jsx';

const SubmittedImages = ({ review }) => {
  if (review.photos.length > 0) {
    return (
      <div className="review-tile-images">
        {review.photos.map((photo) => (
          <SubmittedImage photo={photo} key={photo.id} />
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default SubmittedImages;
