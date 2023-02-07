type nexQuestionProps = {
  nextQuestionHandler(): void;
};

const NextQuestion = (props: nexQuestionProps) => {
  const { nextQuestionHandler } = props;

  return (
    <div className="next-question-div">
      <button className="btn btn-next-question" onClick={nextQuestionHandler}>
        Next question
      </button>
    </div>
  );
};

export default NextQuestion;
