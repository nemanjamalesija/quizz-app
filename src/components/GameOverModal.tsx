import React from 'react';
import { quizScoreTrackerProps } from '../types/types';

const GameOverModal = (props: quizScoreTrackerProps) => {
  const { correctAnswers, currentQuestionIndex } = props;

  const corectAnsweredPercentage = Math.round(
    (correctAnswers / (currentQuestionIndex + 1)) * 100
  );

  return (
    <div className="modal">
      <h2 className="heading-modal">Game Over!</h2>
      <p className="modal-paragraph">
        You answered {correctAnswers} / {currentQuestionIndex + 1} or{' '}
        {corectAnsweredPercentage}% questions correctly
      </p>
    </div>
  );
};

export default GameOverModal;
