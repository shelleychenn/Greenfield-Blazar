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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
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
              name="summary"
              value={this.state.summary}
              placeholder="Example: Best purchase ever!"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Review Body: </label>
            <textarea
              value={this.state.body}
              name="body"
              placeholder="Why did you like the product or not?"
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Nickname: </label>
            <input
              type="text"
              name="reviewer_name"
              value={this.state.reviewer_name}
              placeholder="Example: jackson11!"
              onChange={this.handleChange}
              required
            />
            <p className="form-text">
              For privacy reasons, do not use your full name or email address
            </p>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              placeholder="name@example.com"
              onChange={this.handleChange}
              required
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
