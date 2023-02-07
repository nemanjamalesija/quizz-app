import AnswerOption from './AnswerOption';

type answersProps = {
  answersCombined: string[];
  checkAnswerHandler(answer: string): void;
};

const Answers = (props: answersProps) => {
  const { answersCombined, checkAnswerHandler } = props;
  return (
    <div className="answers-container">
      {answersCombined.map((answer, i) => {
        return (
          <AnswerOption
            key={i}
            answer={answer}
            checkAnswerHandler={checkAnswerHandler}
          />
        );
      })}
    </div>
  );
};

export default Answers;
