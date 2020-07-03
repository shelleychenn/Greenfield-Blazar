import React, { Component } from 'react';

class NewReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      summary: '',
      body: '',
      photos: [],
      reviewer_name: '',
      email: '',
    };
  }

  render() {
    return (
      <div className="modal-form">
        <div className="modal-form-heading">
          <h3>Write Your Review</h3>
        </div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>Review summary: </label>
            <input
              type="text"
              className="form-control"
              id="review-summary"
              placeholder="Example: Best purchase ever!"
            />
          </div>
          <div className="form-group">
            <label>Review Body: </label>
            <textarea
              className="form-control"
              placeholder="Why did you like the product or not?"
            />
          </div>

          <div className="form-group">
            <label>Nickname: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Example: jackson11!"
            />
            <p className="form-text">
              For privacy reasons, do not use your full name or email address
            </p>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
            />
            <p className="form-text">
              For authentication reasons, you will not be emailed
            </p>
          </div>
          <div className="form-group">
            <button className="form-submit-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewReviewForm;
