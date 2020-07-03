import React from 'react';

const TriggerButton = ({ showModal, buttonRef, triggerText }) => {
  return (
    <button className="add-review-button" ref={buttonRef} onClick={showModal}>
      {triggerText}
    </button>
  );
};

export default TriggerButton;
