// import { useState, useEffect } from "react";
import "./App.css";
// import ImageComponent from "./component/ImageComponent";
import HomePage from "./pages/HomePage";
import ScorePage from "./pages/ScorePage";
import QuestionPage from "./pages/QuestionPage";
// import { data } from "./data";
import { Routes, Route } from "react-router-dom";

// import ReactPaginate from "react-paginate";
// import { Routes, Route } from "react-router-dom";

function App() {
  // const [imageSelected, setImageSelected] = useState("");
  // const [isCorrect, setIsCorrect] = useState("");
  // const [marks, setMarks] = useState(0);
  // const [timer, setTimer] = useState({ s: 15 });
  // const [myClearInterval, setMyClearInterval] = useState();
  // const [pageNumber, setPageNumber] = useState(0);
  // const [nextQues, setNextQuestion] = useState(0);
  // console.log("here", imageSelected);
  // const handleStopWatch = () => {
  //   if (timer.s === 0) {
  //     clearInterval(myClearInterval);
  //   } else {
  //     timer.s--;
  //   }
  //   setTimer({ s: timer.s });
  // };

  // useEffect(() => {
  //   setMyClearInterval(
  //     setInterval(() => {
  //       handleStopWatch();
  //     }, 1500)
  //   );
  //   // eslint-disable-next-line
  // }, []);
  // const isFakeOrNot = (e) => {
  //   e.stopPropagation();
  //   if (imageSelected === "correct") {
  //     setMarks((c) => c + 1);
  //     setIsCorrect(true);
  //   } else {
  //     setIsCorrect(false);
  //   }
  // };
  return (
    <>
      {/* <div className='mainWrapper'>
        <div className='headerWrapper'>
          <div className='timer'>Timer: {timer.s}</div>
          <div className='marks'>Marks: {marks}</div>
        </div>

        {isCorrect !== ""
          ? isCorrect
            ? "Yay!!! you got that right"
            : "Oops!! thats wrong"
          : ""} */}

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/score' element={<ScorePage />} />
        <Route path='/question' element={<QuestionPage />} />
      </Routes>
      {/* <ImageComponent
          data={data}
          imageSelected={imageSelected}
          nextQues={nextQues}
          setNextQuestion={setNextQuestion}
          setImageSelected={setImageSelected}
        />

        <button onClick={(e) => isFakeOrNot(e)}> Let's Check</button>
      </div> */}

      {/* <div className='footer'>
        <button onClick={() => setNextQuestion((ques) => ques + 1)}>
          Next Question
        </button>
      </div> */}
    </>
  );
}

export default App;
