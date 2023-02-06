import { quizState } from '../types/types';

export const initialState: quizState = {
  amount: 10,
  category: 'sports',
  difficulty: 'easy',
  type: 'multiple',
  questions: [
    {
      question: '',
      incorrect_answers: ['', '', ''],
      correct_answer: ',',
    },
  ],
};
