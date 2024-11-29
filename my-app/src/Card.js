import React, { useState } from 'react';
import './Card.css';
import CardFooter from './CardFooter';
import CardSidebar from './CardSidebar';
import AnswerModal from './components/AnswerModal';

function Card({ question, answer }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCommentsClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card">
      <div className="card_header">
        <h2>{question}</h2>
      </div>
      <CardFooter />
      <CardSidebar onCommentsClick={handleCommentsClick} />
      <AnswerModal isOpen={isModalOpen} onClose={handleCloseModal} answer={answer} />
    </div>
  );
}

export default Card;
