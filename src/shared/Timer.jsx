import React, { useContext, useEffect } from "react";
import { AllContext } from "../context_api/GlobalProvider";

const Timer = () => {
  const { dispatch, remainingSeconds } = useContext(AllContext);
  const mins = Math.floor(remainingSeconds / 60);
  const secs = String(remainingSeconds % 60).padStart(2, "0");
  useEffect(
    function () {
      let timer = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(timer);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins} : {secs}
    </div>
  );
};

export default Timer;
