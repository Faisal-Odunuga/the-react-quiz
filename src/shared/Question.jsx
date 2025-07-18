import React, { useContext } from "react";
import Options from "./Options";
import Progress from "./Progress";
import { AllContext } from "../context_api/GlobalProvider";

const Question = () => {
  const { questionBox, currentQuestion } = useContext(AllContext);

  const question = questionBox[currentQuestion];
  // console.log(question);

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
};

export default Question;
