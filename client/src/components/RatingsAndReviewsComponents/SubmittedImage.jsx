import React, { Component } from 'react';
import Modal from './Modal.jsx';

class SubmittedImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleShowModal = this.handleShowModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleShowModal() {
    this.setState({ isOpen: true });
  }

  toggleScrollLock() {
    document.querySelector('html').classList.toggle('scroll-lock');
  }

  closeModal() {
    this.setState({ isOpen: false });
    this.toggleScrollLock();
  }

  render() {
    console.log(this.props.photo.url);
    return (
      <div>
        <img
          className="review-tile-image"
          src={this.props.photo.url}
          onClick={this.handleShowModal}
          alt="no image"
        />
        {this.state.isOpen && (
          <Modal
            modalRef={(n) => {
              this.modal = n;
            }}
            buttonRef={(n) => {
              this.closeButton = n;
            }}
            closeModal={this.closeModal}
          >
            <img
              className="review-tile-image-modal"
              src={this.props.photo.url}
              alt="no image"
            />
          </Modal>
        )}
      </div>
    );
  }
}

export default SubmittedImage;
