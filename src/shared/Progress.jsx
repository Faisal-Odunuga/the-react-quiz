import React, { useContext } from "react";
import { AllContext } from "../context_api/GlobalProvider";

const Progress = () => {
  const { answer, points, currentQuestion, noOfQuestions, maxPossiblePoints } =
    useContext(AllContext);
  const progress =
    ((currentQuestion + Number(answer !== null)) / noOfQuestions) * 100;
  return (
    <header className="mb-8 space-y-4">
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="flex justify-between !text-2xl">
        <p>
          Question {currentQuestion + 1} of {noOfQuestions}
        </p>
        <p>
          <strong>{points}</strong> /{maxPossiblePoints}
        </p>
      </div>
    </header>
  );
};

export default Progress;
