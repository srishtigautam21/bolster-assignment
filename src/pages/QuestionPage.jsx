import React from "react";
import ImageComponent from "../component/ImageComponent";
import { useDataContext } from "../context/dataContext";
// import { data } from "../data";
import { useNavigate } from "react-router-dom";

const QuestionPage = () => {
  const {
    timer,
    marks,
    isCorrect,
    // imageSelected,
    // setImageSelected,
    nextQues,
    setNextQuestion,
    isFakeOrNot,
    stopTimer,
    startTimer,
    setTimer,
    setImgCategory,
    myClearInterval,
    setIsCorrect,
    quizData,
  } = useDataContext();
  const navigate = useNavigate();
  const handleQuestion = () => {
    if (nextQues === 9) {
      navigate("/score");
      setIsCorrect("");
    } else {
      setNextQuestion((ques) => ques + 1);
      clearInterval(myClearInterval);
      setTimer({ s: 15 });
      startTimer();
      setImgCategory("");
      setIsCorrect("");
    }
  };

  return (
    <>
      <div className='mainWrapper'>
        <div className='headerWrapper'>
          <div className='timer'>Timer: {timer.s}</div>
          <div className='marks'>Marks: {marks}</div>
        </div>

        {isCorrect !== ""
          ? isCorrect
            ? "Yay!!! you got that right"
            : "Oops!! thats wrong"
          : ""}
        <ImageComponent data={quizData} />
        {/* imageSelected={imageSelected}
          nextQues={nextQues}
          setNextQuestion={setNextQuestion}
          setImageSelected={setImageSelected} */}

        <button
          onClick={(e) => {
            isFakeOrNot(e);
            stopTimer();
          }}
        >
          {" "}
          Let's Check
        </button>
      </div>

      <div className='footer'>
        <button onClick={() => handleQuestion()}>Next Question</button>
      </div>
    </>
  );
};

export default QuestionPage;
