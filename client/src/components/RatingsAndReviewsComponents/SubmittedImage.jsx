import React, { Component } from 'react';

class SubmittedImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleShowModal = this.handleShowModal.bind(this);
  }

  handleShowModal() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <img
          className="review-tile-image"
          src={this.props.photo.url}
          onClick={this.handleShowModal}
          alt="no image"
        />
        {this.state.isOpen && (
          <dialog
            className="review-tile-dialog"
            style={{ position: 'absolute' }}
            open
            onClick={this.handleShowModal}
          >
            {/* <span class="close-btn">&times;</span> */}
            <img
              className="review-tile-image-modal"
              src={this.props.photo.url}
              onClick={this.handleShowModal}
              alt="no image"
            />
          </dialog>
        )}
      </div>
    );
  }
}

export default SubmittedImage;
