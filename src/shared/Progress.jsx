import React, { useContext } from "react";
import { AllContext } from "../context_api/GlobalProvider";

const Progress = () => {
  const { answer, points, currentQuestion, noOfQuestions, maxpossiblePoints } =
    useContext(AllContext);

  return (
    <header className="">
      <progress
        max={noOfQuestions}
        value={currentQuestion + Number(answer !== null)}
        className="rounded-full bg-red-600"
      />
      <p>
        Question {currentQuestion + 1} of {noOfQuestions}
      </p>
      <p>
        <strong>{points}</strong> /{maxpossiblePoints}
      </p>
    </header>
  );
};

export default Progress;
