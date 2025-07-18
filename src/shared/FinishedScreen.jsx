import React, { useContext } from "react";
import { AllContext } from "../context_api/GlobalProvider";

const FinishedScreen = () => {
  const { percentage, points, maxPossiblePoints, highScore, dispatch } =
    useContext(AllContext);
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {percentage}%)
      </p>
      <p className="highscore">(Highscore : {highScore} %)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
};

export default FinishedScreen;
