import React from 'react';

export type quizAnswerProps = {
  answer: string;
  checkAnswerHandler(answer: string): void;
};

const SingleQuestion = (props: quizAnswerProps) => {
  const { answer, checkAnswerHandler } = props;
  return (
    <p
      className="single-question"
      dangerouslySetInnerHTML={{ __html: answer }}
      onClick={() => checkAnswerHandler(answer)}
    ></p>
  );
};

export default SingleQuestion;
