import React, { Component } from 'react';
import Modal from './Modal.jsx';
import TriggerButton from './TriggerButton.jsx';
import NewReviewForm from './NewReviewForm.jsx';

class AddReviewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
    };
    this.showModal = this.showModal.bind(this);
    this.toggleScrollLock = this.toggleScrollLock.bind(this);
    this.closeModal = this.closeModal.bind(this);
    //this.closeModalOnSubmit = this.closeModalOnSubmit.bind(this);
  }

  showModal() {
    this.setState({ isShown: true }, () => {
      this.closeButton.focus();
    });
    this.toggleScrollLock();
  }

  toggleScrollLock() {
    document.querySelector('html').classList.toggle('scroll-lock');
  }

  closeModal() {
    console.log('hello');
    this.setState({ isShown: false });
    this.TriggerButton.focus();
    this.toggleScrollLock();
  }

  // closeModalOnSubmit() {
  //   this.setState({ isShown: false });
  //   this.TriggerButton.focus();
  //   this.toggleScrollLock();
  // }

  render() {
    return (
      <React.Fragment>
        <TriggerButton
          showModal={this.showModal}
          buttonRef={(n) => {
            this.TriggerButton = n;
          }}
          TriggerText={this.props.TriggerText}
        />
        {this.state.isShown ? (
          <Modal
            // refer modal area
            modalRef={(n) => {
              this.modal = n;
            }}
            // refer close button
            buttonRef={(n) => {
              this.closeButton = n;
            }}
            closeModal={this.closeModal}
          >
            <NewReviewForm
              handleNewReview={this.props.handleNewReview}
              reviewsMetaData={this.props.reviewsMetaData}
              closeModal={this.closeModal}
              //closeModalOnSubmit={this.closeModalOnSubmit}
            />
          </Modal>
        ) : null}
      </React.Fragment>
    );
  }
}

export default AddReviewContainer;
