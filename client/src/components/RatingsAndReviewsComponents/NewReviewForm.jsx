import React from 'react';

const NewReviewForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input className="form-control" id="name" />
      </div>

      <div className="form-group">
        <label htmlFor="email">Review summary</label>
        <input
          type="text"
          className="form-control"
          id="review-summary"
          placeholder="Example: Best purchase ever!"
        />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewReviewForm;
