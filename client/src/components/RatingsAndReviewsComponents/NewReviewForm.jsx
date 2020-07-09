import React, { Component } from 'react';
import StarRating from '../StarRating.jsx';
import RecommendRadioButton from './RecommendRadioButton.jsx';
import CharacteristicsRadioButton from './CharacteristicsRadioButton.jsx';
//import UploadImages from './UploadImages.jsx';
import apiHelpers from '../../helpers/apiHelpers.js';

class NewReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarsClicked: false,
      rating: 0,
      recommend: false,
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
    this.updateCharacteristic = this.updateCharacteristic.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  updateRecommendState(value) {
    if (value === 'Yes') {
      this.setState({
        recommend: true,
      });
    }
    if (value === 'No') {
      this.setState({
        recommend: false,
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
    apiHelpers
      .postReview(this.props.reviewsMetaData.product_id, {
        rating: this.state.rating,
        summary: this.state.summary,
        body: this.state.body,
        recommend: this.state.recommend,
        name: this.state.reviewer_name,
        email: this.state.email,
        photos: this.state.photos,
        characteristics: this.state.characteristics,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateCharacteristic(input) {
    console.log('input', input.type);
    let code = {
      Size: 14,
      Width: 15,
      Comfort: 16,
      Quality: 17,
      Length: 18,
      Fit: 19,
    };
    let num = code[input.type];
    console.log('num', num);

    this.setState({
      characteristics: {
        ...this.state.characteristics,
        [num]: Number(input.value),
      },
    });
  }

  onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      let images = [
        ...this.state.photos,
        URL.createObjectURL(event.target.files[0]),
      ];
      this.setState({
        photos: images,
      });

      // this.setState({
      //   photos: [URL.createObjectURL(event.target.files[0])],
      // });
    }
  }

  render() {
    let imagesThumbNails = this.state.photos.map((photo) => (
      <img className="modal-form-image" src={photo} />
    ));

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

    console.log(this.state);

    let starTest = {
      1: 'Poor',
      2: 'Fair',
      3: 'Average',
      4: 'Good',
      5: 'Great',
    };

    let text = starTest[this.state.rating.toString()];
    console.log('photo', this.state.photos);
    return (
      <div className="modal-form">
        <div className="modal-form-heading">
          <h3>Write Your Review</h3>
        </div>
        <form onSubmit={this.onSubmit}>
          <label>Overall rating*</label>
          <br />
          <div className="modal-form-star-rating">
            <StarRating
              value={this.state.rating}
              onMouseEnter={this.onMouseEnter}
              onMouseLeave={this.onMouseLeave}
              onClickStars={this.onClickStars}
            />
            {text}
          </div>
          <br />
          <br />
          <label>Do you recommend this product?*</label>
          <br />
          <div className="modal-form-recommend-radio-button">
            <RecommendRadioButton
              updateRecommendState={this.updateRecommendState}
            />
          </div>
          <br />
          <label>Characteristics*</label>
          <br />
          {traits.map((trait) => (
            <CharacteristicsRadioButton
              trait={trait}
              updateCharacteristic={this.updateCharacteristic}
            />
          ))}
          <br />
          <div className="form-group">
            <label>Review summary: </label>
            <br />
            <input
              className="modal-form-input"
              type="text"
              name="summary"
              value={this.state.summary}
              placeholder="Example: Best purchase ever!"
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="form-group">
            <label>Review Body:* </label>
            <br />
            <textarea
              className="modal-form-input"
              value={this.state.body}
              name="body"
              placeholder="Why did you like the product or not?"
              onChange={this.handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label>Upload your photos </label>
            <div className="modal-form-upload-body">
              <p style={{ fontSize: '0.8em' }}> *add up to five images*</p>
              <input
                type="file"
                onChange={this.onImageChange}
                className="filetype"
                id="group_image"
              />
              {/* <img className="modal-form-image" src={this.state.photos[0]} /> */}
              <div>{imagesThumbNails}</div>
              {/* <UploadImages /> */}
            </div>
          </div>
          <br />
          <div className="form-group">
            <label>What is your nickname* </label>
            <br />
            <input
              className="modal-form-input"
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
            <label htmlFor="email">Your email* </label>
            <br />
            <input
              className="modal-form-input"
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
              onSubmit={() => {
                console.log('hello');
                this.onSubmit();
                this.props.closeModal();
                //this.props.closeModalOnSubmit();
              }}
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
