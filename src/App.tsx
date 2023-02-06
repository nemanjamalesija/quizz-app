import React, { useState } from 'react';
import Form from './components/Form';
import Loading from './components/Loading';
import Quiz from './components/Quiz';
import { inputsHandlerEvents } from './types/types';
import { initialState } from './constants/initialState';
import { categories } from './constants/categories';
import axios from 'axios';

function App() {
  const [quiz, setQuiz] = useState(initialState);
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchQuestions = async () => {
    return await axios(
      `https://opentdb.com/api.php?amount=${quiz.amount}&category=${
        categories[quiz.category]
      }&difficulty=${quiz.difficulty}&type=multiple`
    );
  };

  console.log(quiz);

  const storeInputsValue = (e: inputsHandlerEvents) => {
    const name = e.target.name;
    const value = e.target.value;

    setQuiz((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setWaiting(false);
    setLoading(true);
    fetchQuestions().then((response) => {
      setQuiz((prev) => {
        return { ...prev, questions: response.data.results };
      });
      setLoading(false);
    });
  };

  if (loading) return <Loading />;

  return (
    <div className="App">
      {waiting && (
        <Form
          storeInputsValue={storeInputsValue}
          submitHandler={submitHandler}
          amount={quiz.amount}
          category={quiz.category}
          difficulty={quiz.difficulty}
        />
      )}
      {!waiting && <Quiz questions={quiz.questions} />}
    </div>
  );
}

export default App;
