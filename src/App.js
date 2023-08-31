import "./App.css";
import HomePage from "./pages/HomePage";
import ScorePage from "./pages/ScorePage";
import QuestionPage from "./pages/QuestionPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/score' element={<ScorePage />} />
        <Route path='/question' element={<QuestionPage />} />
      </Routes>
    </>
  );
}

export default App;
