import React from 'react';

export type quizSingleQuestionProps = { question: string };

const SingleQuestion = (props: quizSingleQuestionProps) => {
  const { question } = props;
  return (
    <p
      className="single-question"
      dangerouslySetInnerHTML={{ __html: question }}
    ></p>
  );
};

export default SingleQuestion;
