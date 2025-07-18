import React, { useContext } from "react";
import { AllContext } from "../context_api/GlobalProvider";

const NextButton = () => {
  const {
    points,
    dispatch,
    answer,
    currentQuestion,
    noOfQuestions,
    maxPossiblePoints,
  } = useContext(AllContext);

  const percentage = (points / maxPossiblePoints) * 100;

  if (answer === null) return null;

  if (currentQuestion < noOfQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (currentQuestion === noOfQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finished", payload: percentage })}
      >
        Finish Quiz
      </button>
    );
};

export default NextButton;
