import React from 'react';

const TriggerButton = ({ showModal, buttonRef, TriggerText }) => {
  return (
    <button className="add-review-button" ref={buttonRef} onClick={showModal}>
      {TriggerText}
    </button>
  );
};

export default TriggerButton;
