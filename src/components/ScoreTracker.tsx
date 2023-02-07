import React from 'react';
import { quizScoreTrackerProps } from '../types/types';

const SoreTracker = (props: quizScoreTrackerProps) => {
  const { currentQuestionIndex, correctAnswers } = props;

  return (
    <div className="score-tracker">
      <p className="correct_answers">{correctAnswers}</p>
      <p className="current-question">{currentQuestionIndex}</p>
    </div>
  );
};

export default SoreTracker;
