import React from 'react';

function SuccessModal({ closeModal }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <p>Form Successfully Submitted!</p>
      </div>
    </div>
  );
}

export default SuccessModal;
