import React from "react";
import ImageComponent from "../component/ImageComponent";
import { useDataContext } from "../context/dataContext";

const QuestionPage = () => {
  const {
    timer,
    marks,
    isCorrect,
    isFakeOrNot,
    stopTimer,
    quizData,
    disable,
    message,
    handleQuestion,
  } = useDataContext();

  return (
    <>
      <div className='mainWrapper'>
        <div className='headerWrapper'>
          <div className='timer'>Timer: {timer.s}</div>
          <div className='marks'>Marks: {marks}</div>
        </div>

        <div className='msgWrapper'>
          {isCorrect !== "" ? (
            isCorrect ? (
              <div style={{ color: "green" }}>
                Yay!!! you got that right👏👏
              </div>
            ) : (
              <div style={{ color: "red" }}>Oops!! thats wrong 😥😥</div>
            )
          ) : message ? (
            "You need to select an option!👀"
          ) : (
            ""
          )}
        </div>
        <ImageComponent data={quizData} />
        {!disable ? (
          <button
            onClick={(e) => {
              isFakeOrNot(e);
              stopTimer();
            }}
            className='checkBtn'
          >
            {" "}
            Let's Check
          </button>
        ) : (
          <button disable className='checkBtn disabledBtn'>
            Let's Check
          </button>
        )}
      </div>

      <div className='footer'>
        {disable ? (
          <button onClick={() => handleQuestion()} className='checkBtn'>
            Next Question
          </button>
        ) : (
          <button disable className='checkBtn disabledBtn'>
            Next Question
          </button>
        )}
      </div>
    </>
  );
};

export default QuestionPage;
