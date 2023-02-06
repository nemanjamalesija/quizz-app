export type quizState = {
  amount: number;
  category: string;
  difficulty: string;
  type: string;
  questions: {
    question: string;
    incorrect_answers: [string, string, string];
    correct_answer: string;
  }[];
};

export type quizCategories = {
  [key: string]: string;
};

export type inputsHandlerEvents =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLSelectElement>;
