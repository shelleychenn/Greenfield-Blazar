import React, { Component } from 'react';
import StarRating from '../StarRating.jsx';
import RecommendRadioButton from './RecommendRadioButton.jsx';
import CharacteristicsRadioButton from './CharacteristicsRadioButton.jsx';
import UploadImages from './UploadImages.jsx';

class NewReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarsClicked: false,
      rating: 0,
      recommend: 0,
      summary: '',
      body: '',
      photos: [],
      reviewer_name: '',
      email: '',
      characteristics: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onClickStars = this.onClickStars.bind(this);
    this.updateRecommendState = this.updateRecommendState.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  updateRecommendState(value) {
    if (value === 'Yes') {
      this.setState({
        recommend: 1,
      });
    }
  }

  onMouseEnter(e) {
    this.setState({ isStarsClicked: false, rating: e });
  }

  onMouseLeave(e) {
    if (!this.state.isStarsClicked) {
      this.setState({ rating: 0 });
    }
  }

  onClickStars() {
    this.setState({ isStarsClicked: true });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.handleNewReview(product_id, this.state);
  }

  render() {
    let characteristicSelections = {
      Size: [
        'A size too small',
        '½ a size too small',
        'Perfect',
        '½ a size too big',
        'A size too wide',
      ],
      Width: [
        'Too narrow',
        'Slightly narrow',
        'Perfect',
        'Slightly wide',
        'Too wide',
      ],
      Comfort: [
        'Uncomfortable',
        'Slightly uncomfortable',
        'Ok',
        'Comfortable',
        'Perfect',
      ],
      Quality: [
        'Poor',
        'Below average',
        'What I expected',
        'Pretty great',
        'Perfect',
      ],
      Length: [
        'Runs Short',
        'Runs slightly short',
        'Perfect',
        'Runs slightly long',
        'Runs long',
      ],
      Fit: [
        'Runs tight',
        'Runs slightly tight',
        'Perfect',
        'Runs slightly long',
        'Runs long',
      ],
    };

    let traits = [];
    for (let trait in this.props.reviewsMetaData.characteristics) {
      traits.push({
        type: trait,
        characteristic: characteristicSelections[trait],
      });
    }

    return (
      <div className="modal-form">
        <div className="modal-form-heading">
          <h3>Write Your Review</h3>
        </div>
        <form onSubmit={this.props.onSubmit}>
          <StarRating
            value={this.state.rating}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            onClickStars={this.onClickStars}
          />
          <br />
          <RecommendRadioButton
            updateRecommendState={this.updateRecommendState}
          />
          <br />
          {traits.map((trait) => (
            <CharacteristicsRadioButton trait={trait} />
          ))}

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
          <br />
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
          <br />
          <div>
            <UploadImages />
          </div>
          <br />
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
          <br />
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
          <br />
          <div className="form-group">
            <button
              className="form-submit-button"
              type="submit"
              onSubmit={this.props.onSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewReviewForm;
