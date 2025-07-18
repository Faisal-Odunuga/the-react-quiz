import axios from "axios";

export const fetchQuestions = async (url) => {
  try {
    const response = await axios(url);
    const data = await response.data;
    return data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    return error;
  }
};
