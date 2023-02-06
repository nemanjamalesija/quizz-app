import { useState } from 'react';
import './App.css';

type quizState = {
  numberOfQuestions: number;
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
  numberOfQuestions: 10,
  amount: 10,
  category: 21,
  difficulty: 'easy',
  type: 'multiple',
};

const categories = {
  sports: 21,
  geography: 22,
  mythology: 20,
  art: 25,
};

function App() {
  const [quiz, setQuiz] = useState(initialState);

  return <div className="App"></div>;
}

export default App;
