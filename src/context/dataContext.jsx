import { useContext, createContext, useState } from "react";
import { data } from "../data";
import { useNavigate } from "react-router-dom";
const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const navigate = useNavigate();
  const [imageSelected, setImageSelected] = useState("");
  const [quizData, setQuizData] = useState(data);
  const [imgCategory, setImgCategory] = useState("");
  const [isCorrect, setIsCorrect] = useState("");
  const [marks, setMarks] = useState(0);
  const [timer, setTimer] = useState({ s: 15 });
  const [myClearInterval, setMyClearInterval] = useState();
  const [disable, setDisable] = useState();
  const [nextQues, setNextQuestion] = useState(0);
  const [message, setMessage] = useState(false);

  const run = () => {
    if (timer.s === 0) {
      setNextQuestion((ques) => ques + 1);
      timer.s = 15;
    }
    timer.s--;
    return setTimer({ s: timer.s });
  };
  const startTimer = () => {
    run();
    setMyClearInterval(
      setInterval(() => {
        run();
      }, 1000)
    );
  };

  const stopTimer = () => {
    clearInterval(myClearInterval);
    setTimer({ s: 15 });
  };

  const handleQuestion = () => {
    if (nextQues === 9) {
      navigate("/score");
      setIsCorrect("");
    } else {
      setNextQuestion((ques) => ques + 1);

      startTimer();
      setImgCategory("");
      setIsCorrect("");
      setMessage(false);
      setDisable(false);
      setImageSelected("");
    }
  };

  const isFakeOrNot = (e) => {
    e.stopPropagation();

    if (
      imageSelected === "" ||
      imgCategory === "image1" ||
      imgCategory === "image2"
    ) {
      setMessage(true);
      setIsCorrect("");
    } else if (imageSelected === "correct") {
      setMarks((c) => c + 1);
      setIsCorrect(true);
      setDisable(true);
    } else {
      setIsCorrect(false);
      setDisable(true);
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
        disable,
        setDisable,
        message,
        setMessage,
        handleQuestion,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => useContext(DataContext);
export { useDataContext, DataProvider };
