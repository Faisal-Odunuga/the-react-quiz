import React, { useContext, useEffect } from "react";
import { AllContext } from "../../context_api/GlobalProvider";
import Header from "../../shared/Header";
import Body from "../../shared/Body";
import StartScreen from "../../shared/StartScreen";
import Loader from "../../shared/Loader";
import Error from "../../shared/Error";
import Progress from "../../shared/Progress";
import Question from "../../shared/Question";
import Footer from "../../shared/Footer";
import NextButton from "../../shared/NextButton";
import Timer from "../../shared/Timer";
import FinishedScreen from "../../shared/FinishedScreen";
import "../../index.css";

const Home = () => {
  const { getQuestions, state } = useContext(AllContext);

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div className="app">
      <Header />
      <Body>
        {state.status === "loading" && <Loader />}
        {state.status === "error" && <Error />}
        {state.status === "ready" && (
          <>
            <StartScreen />
          </>
        )}
        {state.status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <NextButton />
              <Timer />
            </Footer>
          </>
        )}
        {state.status === "finished" && <FinishedScreen />}
      </Body>
    </div>
  );
};

export default Home;
