type currentQuestionProps = { currentQuestionIndex: string };

const CurrentQuestion = (props: currentQuestionProps) => {
  const { currentQuestionIndex } = props;

  return (
    <h2
      className="heading-secondary"
      dangerouslySetInnerHTML={{ __html: currentQuestionIndex }}
    ></h2>
  );
};

export default CurrentQuestion;
