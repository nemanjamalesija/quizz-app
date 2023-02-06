import React, { useState } from 'react';
import { quizState } from '../types/types';
import SingleQuestion from './SingleQuestion';
import ScoreTracker from './ScoreTracker';

export type quizQuestionsProps = {
  questions: quizState['questions'];
};

const Questions = (props: quizQuestionsProps) => {
  const { questions } = props;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const { incorrect_answers, correct_answer } = questions[currentQuestion];

  const asnwersTemp = [...incorrect_answers, correct_answer];

  const checkCorrectAnswer = (answer: string) => {};

  return (
    <main className="questions-main">
      <ScoreTracker
        currentQuestion={currentQuestion}
        correctAnswers={correctAnswers}
      />
      {asnwersTemp.map((question, i) => {
        return <SingleQuestion key={i} question={question} />;
      })}
    </main>
  );
};

export default Questions;
