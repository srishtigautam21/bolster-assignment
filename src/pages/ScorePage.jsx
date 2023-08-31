import React from "react";
import { useDataContext } from "../context/dataContext";
import "./ScorePage.css";
import { useNavigate } from "react-router-dom";

const ScorePage = () => {
  const { marks } = useDataContext();
  const navigate = useNavigate();
  return (
    <div className='scoreCard'>
      <div>Score</div>
      <div>You Scored: {marks} / 10 </div>
      <button onClick={() => navigate("/")}>Retry</button>
    </div>
  );
};

export default ScorePage;
