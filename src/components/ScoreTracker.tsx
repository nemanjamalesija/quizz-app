import React from 'react';

export type quizScoreTrackerProps = {
  currentQuestion: number;
  correctAnswers: number;
};

const SoreTracker = (props: quizScoreTrackerProps) => {
  const { currentQuestion, correctAnswers } = props;

  return (
    <div className="score-tracker">
      <p className="current-question">{currentQuestion}</p>
      <p className="correct_answers">{correctAnswers}</p>
    </div>
  );
};

export default SoreTracker;
