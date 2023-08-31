import React from "react";
import { useDataContext } from "../context/dataContext";
import "./ScorePage.css";
import { useNavigate } from "react-router-dom";

const ScorePage = () => {
  const { marks, quizData, setQuizData, setImgCategory, setTimer, setMarks } =
    useDataContext();
  const navigate = useNavigate();
  const shuffleData = (dataArr) => {
    for (let i = dataArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [dataArr[i], dataArr[j]] = [dataArr[j], dataArr[i]];
    }
    setQuizData(dataArr);
    setTimer({ s: 15 });
    setImgCategory("");
    setMarks(0);
  };

  return (
    <div className='scoreCard'>
      <div className='score'>Score</div>
      <div className='yourScore'>You Scored: {marks} / 10 </div>
      <button
        onClick={() => {
          navigate("/");
          shuffleData(quizData);
        }}
        className='retryBtn'
      >
        Retry
      </button>
    </div>
  );
};

export default ScorePage;
