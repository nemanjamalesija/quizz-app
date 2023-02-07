import React from 'react';
import { inputsHandlerEvents } from '../types/types';

type formProps = {
  storeInputsValue: (e: inputsHandlerEvents) => void;
  submitHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  amount: number;
  category: string;
  difficulty: string;
};

const Form = (props: formProps) => {
  const { storeInputsValue, submitHandler, amount, category, difficulty } =
    props;

  return (
    <div className="form-container">
      <h1 className="heading-primary">Quiz setup</h1>
      <form className="setup-form">
        <div className="form-section">
          <label htmlFor="amount">Number of questions</label>
          <input
            type="number"
            min="1"
            max="20"
            name="amount"
            value={amount}
            onChange={storeInputsValue}
          />
        </div>
        <div className="form-section">
          <label htmlFor="category">category</label>
          <select name="category" value={category} onChange={storeInputsValue}>
            <option value="sports">sports</option>
            <option value="geography">geography </option>
            <option value="mythology">mythology </option>
            <option value="art">art</option>
          </select>
        </div>
        <div className="form-section">
          <label htmlFor="difficulty">Difficulty</label>
          <select
            name="difficulty"
            value={difficulty}
            onChange={storeInputsValue}
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-submit"
          onClick={submitHandler}
        >
          Start playing!
        </button>
      </form>
    </div>
  );
};

export default Form;
