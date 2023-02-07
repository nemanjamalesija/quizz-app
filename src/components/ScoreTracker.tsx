import React from 'react';
import { quizScoreTrackerProps } from '../types/types';

const SoreTracker = (props: quizScoreTrackerProps) => {
  const { currentQuestionIndex, correctAnswers } = props;

  return (
    <div className="score-tracker">
      <h3 className="heading-tertiary">Correct answers:</h3>
      <p className="score">
        {correctAnswers} / {currentQuestionIndex}
      </p>
    </div>
  );
};

export default SoreTracker;
