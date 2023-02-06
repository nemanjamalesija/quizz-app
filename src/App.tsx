import React, { useEffect, useState } from 'react';
import axios from 'axios';

type quizState = {
  amount: number;
  category: string;
  difficulty: string;
  type: string;
};

type quizCategories = {
  [key: string]: string;
};

type inputsHandlerProps =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLSelectElement>;

const initialState: quizState = {
  amount: 10,
  category: 'sports',
  difficulty: 'easy',
  type: 'multiple',
};

const categories: quizCategories = {
  sports: '21',
  geography: '22',
  mythology: '20',
  art: '25',
};

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

  const storeInputsValue = (e: inputsHandlerProps) => {
    const name = e.target.name;
    const value = e.target.value;

    setQuiz((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="App">
      <form className="setup-form">
        <div className="form-section">
          <label htmlFor="amount" className="label labe-amount">
            Number of questions
          </label>
          <input
            type="number"
            min="1"
            max="20"
            name="amount"
            value={quiz.amount}
            onChange={(e) => storeInputsValue}
          />
        </div>
        <div className="form-section">
          <label htmlFor="category">category</label>
          <select
            name="category"
            className="label label-category"
            value={quiz.category}
            onChange={(e) => storeInputsValue}
          >
            <option value="sports">sports</option>
            <option value="geography">geography </option>
            <option value="mythology">mythology </option>
            <option value="art">art</option>
          </select>
        </div>
        <div className="form-section">
          <label htmlFor="difficulty" className="label label-difficulty">
            Difficulty
          </label>
          <select
            name="difficulty"
            value={quiz.difficulty}
            onChange={(e) => storeInputsValue}
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default App;
