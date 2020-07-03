import React from 'react';
import ReactDOM from 'react-dom';
import FocusTrap from 'focus-trap-react';
import NewReviewForm from './NewReviewForm.jsx';

const NewReviewModal = ({
  onSubmit,
  modalRef,
  buttonRef,
  closeModal,
  onClickOutside,
}) => {
  return ReactDOM.createPortal(
    <FocusTrap>
      <aside
        tag="aside"
        role="dialog"
        tabIndex="-1"
        aria-modal="true"
        className="modal-cover"
        onClick={onClickOutside}
      >
        <div className="modal-area" ref={modalRef}>
          <button
            ref={buttonRef}
            aria-label="Close Modal"
            aria-labelledby="close-modal"
            className="modal-close"
            onClick={closeModal}
          >
            <span id="close-modal" className="hide-visual"></span>
            <svg className="modal-close-icon" viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </button>

          <div className="new-review-modal-body">
            <NewReviewForm onSubmit={onSubmit} />
          </div>
        </div>
      </aside>
    </FocusTrap>,
    document.body
  );
};

export default NewReviewModal;
