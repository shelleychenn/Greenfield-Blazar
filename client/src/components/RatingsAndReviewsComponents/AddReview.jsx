import React from 'react';
import AddReviewContainer from './AddReviewContainer.jsx';
import apiHelpers from '../../helpers/apiHelpers.js';
//

const AddReview = ({ reviewsMetaData }) => {
  const TriggerText = 'ADD A REVIEW';
  const handleNewReview = (product_id, newReviewInfo) => {
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
      .then((response) => {
        dispatch({
          type: 'POST_NEW_REVIEWS',
          payload: response,
        });
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
