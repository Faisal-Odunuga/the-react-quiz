import React, { useContext } from "react";
import { AllContext } from "../context_api/GlobalProvider";

const Options = ({ question }) => {
  const { dispatch, answer } = useContext(AllContext);
  const selectedAns = answer !== null;
  // console.log(question.answer);

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer && "answer"} ${
            selectedAns &&
            (index === question.correctOption ? "correct" : "wrong")
          }`}
          key={option}
          onClick={() => dispatch({ type: "pickAnswer", payload: index })}
          disabled={selectedAns}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
