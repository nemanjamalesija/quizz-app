import React from 'react';

type currentQuestionProps = { currentQuestionIndex: string };

const CurrentQuestion = (props: currentQuestionProps) => {
  const { currentQuestionIndex } = props;

  return (
    <h3
      className="curent-question"
      dangerouslySetInnerHTML={{ __html: currentQuestionIndex }}
    ></h3>
  );
};

export default CurrentQuestion;
