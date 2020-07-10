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
    let link;
    if (this.props.photo.url.slice(0, 5) === 'blob:') {
      link = 'https://source.unsplash.com/random';
    } else {
      link = this.props.photo.url;
    }
    return (
      <div>
        <img
          className="review-tile-image"
          src={link}
          onClick={this.handleShowModal}
          alt="loading image"
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
              src={link}
              alt="loading image"
            />
          </Modal>
        )}
      </div>
    );
  }
}

export default SubmittedImage;
