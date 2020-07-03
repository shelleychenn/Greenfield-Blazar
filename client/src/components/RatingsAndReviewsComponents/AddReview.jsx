import React from 'react';
import AddReviewContainer from './AddReviewContainer.jsx';

const AddReview = () => {
  const TriggerText = 'Add a Review';
  const onSubmit = (event) => {
    event.preventDefault(event);

    // update date here with new review inputs
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };

  return (
    <div className="add-review">
      <AddReviewContainer TriggerText={TriggerText} onSubmit={onSubmit} />
    </div>
  );
};

export default AddReview;
