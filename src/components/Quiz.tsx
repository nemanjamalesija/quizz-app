import React, { useEffect, useState } from 'react';
import { quizState } from '../types/types';
import Answers from './Answers';
import CurrentQuestion from './CurrentQuestion';
import GameOverModal from './GameOverModal';
import ScoreTracker from './ScoreTracker';

export type quizQuestionsProps = {
  questions: quizState['questions'];
};

const Questions = (props: quizQuestionsProps) => {
  const { questions } = props;
  const [currentQuestionIndex, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [gameOverModal, setGameOverModal] = useState(false);
  const { incorrect_answers, correct_answer } = questions[currentQuestionIndex];

  // add and randomize correct answer
  let answersCombined = [...incorrect_answers];
  const randomIndex = Math.floor(Math.random() * 4) + 1;
  answersCombined.splice(randomIndex, 0, correct_answer);

  const checkAnswerHandler = (answer: string) => {
    if (currentQuestionIndex + 1 >= questions.length) {
      if (answer === questions[currentQuestionIndex].correct_answer)
        setCorrectAnswers((prev) => prev + 1);
      setGameOverModal(true);
      return;
    }

    if (answer === questions[currentQuestionIndex].correct_answer) {
      setCorrectAnswers((prev) => prev + 1);
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  return (
    <main className="questions-main">
      <ScoreTracker
        currentQuestionIndex={currentQuestionIndex}
        correctAnswers={correctAnswers}
      />
      <CurrentQuestion
        currentQuestionIndex={questions[currentQuestionIndex].question}
      />
      <Answers
        answersCombined={answersCombined}
        checkAnswerHandler={checkAnswerHandler}
      />
      {gameOverModal && (
        <GameOverModal
          currentQuestionIndex={currentQuestionIndex}
          correctAnswers={correctAnswers}
        />
      )}
    </main>
  );
};

export default Questions;
