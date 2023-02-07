import React from 'react';
import { quizScoreTrackerProps } from '../types/types';

type gameOverModalProps = quizScoreTrackerProps & {
  resetQuizHandler(): void;
};

const GameOverModal = (props: gameOverModalProps) => {
  const { correctAnswers, currentQuestionIndex, resetQuizHandler } = props;

  const corectAnsweredPercentage = Math.round(
    (correctAnswers / (currentQuestionIndex + 1)) * 100
  );

  return (
    <div className="modal">
      <h2 className="heading-secondary">Game Over!</h2>
      <p className="modal-paragraph">
        You answered{' '}
        <span>
          {correctAnswers} / {currentQuestionIndex + 1}
        </span>{' '}
        or <span>{corectAnsweredPercentage}% </span>questions correctly
      </p>
      <button className="btn btn-play-again" onClick={resetQuizHandler}>
        Play again?
      </button>
    </div>
  );
};

export default GameOverModal;
