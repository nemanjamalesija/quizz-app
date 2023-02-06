import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

/* https://opentdb.com/api.php?amount=10&category=25*/

type quizState = {
  amount: number;
  category: number;
  difficulty: string;
  type: string;
};

type quizCategories = {
  sports: number; // 21
  geography: number; // 22
  mythology: number; // 20
  art: number; // 25
};

const initialState: quizState = {
  amount: 10,
  category: 21,
  difficulty: 'easy',
  type: 'multiple',
};

const categories: quizCategories = {
  sports: 21,
  geography: 22,
  mythology: 20,
  art: 25,
};

function App() {
  const [quiz, setQuiz] = useState(initialState);
  const [category, setCaregory] = useState(21);
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchQuestions = async () => {
    return await axios(
      `https://opentdb.com/api.php?amount=${quiz.amount}&category=${category}&difficulty=${quiz.difficulty}&type=multiple`
    );
  };

  useEffect(() => {
    fetchQuestions().then((response) => console.log(response.data.results));
  }, []);

  return <div className="App"></div>;
}

export default App;
