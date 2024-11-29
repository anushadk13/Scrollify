import React, {useState, useEffect} from 'react';
import './QuestionModal.css';

function QuestionModal({ isOpen, onClose, onSubmit, initialQuestion, initialAnswer }) {
  const [question, setQuestion] = useState(initialQuestion);
  const [answer, setAnswer] = useState(initialAnswer);

  useEffect(() => {
    setQuestion(initialQuestion);
    setAnswer(initialAnswer);
  }, [initialQuestion, initialAnswer]);
  
 


  const handleSubmit = () => {
    onSubmit(question, answer);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>New Question</h2>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <h2>Answer</h2>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default QuestionModal;