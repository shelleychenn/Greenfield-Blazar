import React from 'react';
import AddReviewContainer from './AddReviewContainer.jsx';
import apiHelpers from '../../helpers/apiHelpers.js';

const AddReview = ({ reviewsMetaData }) => {
  const TriggerText = 'Add a Review';
  const handleNewReview = (product_id, newReviewInfo) => {
    // update date here with new review inputs
    apiHelpers
      .postReview(product_id, {
        rating: newReviewInfo.rating,
        summary: newReviewInfo.summary,
        body: newReviewInfo.body,
        recommend: newReviewInfo.recommend,
        name: newReviewInfo.reviewer_name,
        email: newReviewInfo.email,
        photos: newReviewInfo.photos,
        characteristics: newReviewInfo.characteristics,
      })
      .then(() => {
        console.log('new review posted!');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="add-review">
      <AddReviewContainer
        TriggerText={TriggerText}
        handleNewReview={handleNewReview}
        reviewsMetaData={reviewsMetaData}
      />
    </div>
  );
};

export default AddReview;
