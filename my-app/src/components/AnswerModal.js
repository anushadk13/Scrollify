import React from 'react';
import './AnswerModal.css';

function AnswerModal({ isOpen, onClose, answer }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Answer</h2>
        <p>{answer}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default AnswerModal;