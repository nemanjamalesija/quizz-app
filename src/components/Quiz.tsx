import React, { useState } from 'react';
import { quizState } from '../types/types';
import Answers from './Answers';
import CurrentQuestion from './CurrentQuestion';
import GameOverModal from './GameOverModal';
import NextQuestion from './NextQuestion';
import ScoreTracker from './ScoreTracker';
import Overlay from './Overlay';

export type quizQuestionsProps = {
  questions: quizState['questions'];
  resetQuizHandler(): void;
};

const Questions = (props: quizQuestionsProps) => {
  const { questions, resetQuizHandler } = props;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [gameOverModal, setGameOverModal] = useState(false);
  const { incorrect_answers, correct_answer } = questions[currentQuestionIndex];

  // add and randomize correct answer
  let answersCombined = [...incorrect_answers];
  const randomIndex = Math.floor(Math.random() * 4) + 1;
  answersCombined.splice(randomIndex, 0, correct_answer);

  const checkAnswerHandler = (answer: string) => {
    if (currentQuestionIndex >= questions.length - 1) {
      if (answer === questions[currentQuestionIndex].correct_answer)
        setCorrectAnswers((prev) => prev + 1);
      setGameOverModal(true);
      return;
    }

    if (answer === questions[currentQuestionIndex].correct_answer) {
      setCorrectAnswers((prev) => prev + 1);
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const nextQuestionHandler = () => {
    let newCurrentQuestionIndex = currentQuestionIndex;
    if (newCurrentQuestionIndex >= questions.length - 1) {
      setGameOverModal(true);
      return;
    } else setCurrentQuestionIndex((prev) => prev + 1);
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
          resetQuizHandler={resetQuizHandler}
        />
      )}
      <NextQuestion nextQuestionHandler={nextQuestionHandler} />
      {gameOverModal && <Overlay />}
    </main>
  );
};

export default Questions;
