import { useContext, createContext, useState } from "react";
import { data } from "../data";
const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [imageSelected, setImageSelected] = useState("");
  const [quizData, setQuizData] = useState(data);
  const [imgCategory, setImgCategory] = useState("");
  const [isCorrect, setIsCorrect] = useState("");
  const [marks, setMarks] = useState(0);
  const [timer, setTimer] = useState({ s: 15 });
  const [myClearInterval, setMyClearInterval] = useState();
  // const [pageNumber, setPageNumber] = useState(0);
  const [nextQues, setNextQuestion] = useState(0);
  console.log("here", imageSelected);
  const run = () => {
    if (timer.s === 0) {
      setNextQuestion((ques) => ques + 1);
      timer.s = 15;
    }
    timer.s--;
    return setTimer({ s: timer.s });
  };
  const startTimer = () => {
    // setTimer({ s: 15 });
    console.log("timer on next ques", timer.s);
    run();
    setMyClearInterval(
      setInterval(() => {
        run();
      }, 1000)
    );
  };

  const stopTimer = () => {
    clearInterval(myClearInterval);
  };
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
  const isFakeOrNot = (e) => {
    e.stopPropagation();
    if (imageSelected === "correct") {
      setMarks((c) => c + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <DataContext.Provider
      value={{
        imageSelected,
        setImageSelected,
        isCorrect,
        setIsCorrect,
        marks,
        setMarks,
        timer,
        setTimer,
        nextQues,
        setNextQuestion,
        isFakeOrNot,
        startTimer,
        stopTimer,
        imgCategory,
        setImgCategory,
        myClearInterval,
        setMyClearInterval,
        quizData,
        setQuizData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => useContext(DataContext);
export { useDataContext, DataProvider };
