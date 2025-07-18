/* eslint-disable no-case-declarations */
/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import React, { createContext, useReducer } from "react";
export const AllContext = createContext();
const GlobalProvider = ({ children }) => {
  const SECS_PER_QUESTION = 30;
  const initialState = {
    questions: [],
    status: "loading",
    filteredQuestions: [],
    currentQuestion: 0,
    answer: null,
    points: 0,
    percentage: 0,
    highScore: 0,
    remainingSeconds: null,
  };

  const getQuestions = async () => {
    try {
      const response = await axios(
        "https://687ad45cabb83744b7edf4c2.mockapi.io/api/questions"
      );
      const data = await response.data;
      console.log(data);

      dispatch({ type: "dataReceived", payload: data });
    } catch (error) {
      dispatch({ type: "dataFailed", payload: error });
    }
  };

  function reducer(state, action) {
    switch (action.type) {
      case "dataReceived":
        return {
          ...state,
          questions: action.payload,
          status: "ready",
          filter: "all",
        };
      case "dataFailed":
        return { ...state, status: "error" };

      case "tick":
        return {
          ...state,
          remainingSeconds: state.remainingSeconds - 1,
          status: state.remainingSeconds === 0 ? "finished" : state.status,
        };

      case "all":
        return { ...state, filter: "all", questions: state.questions };

      case "medium":
        return {
          ...state,
          filter: "medium",
          filteredQuestions: state.questions.filter(
            (ques) => ques.points == 20
          ),
        };

      case "hard":
        return {
          ...state,
          filter: "hard",
          filteredQuestions: state.questions.filter(
            (ques) => ques.points == 30
          ),
        };

      case "start":
        return {
          ...state,
          status: "active",
          remainingSeconds: state.questions.length * SECS_PER_QUESTION,
        };
      case "pickAnswer": {
        const questionArray =
          state.filter === "all" ? state.questions : state.filteredQuestions;
        const question = questionArray.at(state.currentQuestion);

        return {
          ...state,
          answer: action.payload,
          points:
            action.payload === question.correctOption
              ? state.points + question.points
              : state.points,
        };
      }
      case "nextQuestion":
        return {
          ...state,
          currentQuestion: state.currentQuestion + 1,
          answer: null,
        };
      case "finished": {
        const newPercentage = Math.floor(action.payload);
        return {
          ...state,
          status: "finished",
          percentage: newPercentage,
          highScore:
            newPercentage > state.highScore ? newPercentage : state.highScore,
        };
      }

      case "restart":
        return {
          ...initialState,
          status: "ready",
          questions: state.questions,
          filteredQuestions: [],
          highScore: state.highScore,
        };

      default:
        throw new Error("Action is not valid");
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    questions,
    status,
    currentQuestion,
    answer,
    points,
    percentage,
    highScore,
    remainingSeconds,
    filter,
    filteredQuestions,
  } = state;

  const noOfQuestions =
    state.filter === "all"
      ? state.questions.length
      : state.filteredQuestions.length;

  const questionBox =
    state.filter === "all" ? state.questions : state.filteredQuestions;

  const maxPossiblePoints = questionBox.reduce(
    (acc, cur) => acc + cur.points,
    0
  );

  const value = {
    state,
    dispatch,
    questionBox,
    noOfQuestions,
    maxPossiblePoints,
    getQuestions,
    questions,
    status,
    currentQuestion,
    answer,
    points,
    percentage,
    highScore,
    remainingSeconds,
    filter,
    filteredQuestions,
  };
  return <AllContext.Provider value={value}>{children}</AllContext.Provider>;
};

export default GlobalProvider;
