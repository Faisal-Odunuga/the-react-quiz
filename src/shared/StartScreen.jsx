import React, { useContext } from "react";
import { AllContext } from "../context_api/GlobalProvider";
import FilterBox from "./FilterBox";

const StartScreen = () => {
  const { noOfQuestions, dispatch } = useContext(AllContext);
  return (
    <div className="start">
      <h2>Welcome to the react quiz</h2>
      <h3>{noOfQuestions} questions to test your React skill</h3>
      <h4>Select diificulty</h4>
      <FilterBox />
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Start
      </button>
    </div>
  );
};

export default StartScreen;
