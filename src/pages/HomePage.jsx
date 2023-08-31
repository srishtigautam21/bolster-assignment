import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import { useDataContext } from "../context/dataContext";

const HomePage = () => {
  const navigate = useNavigate();
  const { startTimer } = useDataContext();
  return (
    <div className='homePageWrapper'>
      <div className='header'>Spot-the-fake</div>
      <div className='innerWrapper'>
        <div className='intro'>Introduction</div>
        <div>
          Spot-the-fake is a web-based game that requires the player to identify
          the counterfeit website between two images of a website. The two
          website images are for the same brand, where one is an image of the
          actual website and the other is a fake site. The player is given a
          total of <strong>15 seconds</strong> for each pair of images to
          identify the counterfeit website. There are a total of 10 questions
          and the player will be shown the total score at the end of the game.
          10 pairs of image files will be provided, where each pair of image
          files will consist of the correct website image and a fake website
          image.
        </div>
        <button
          className='startBtn'
          onClick={() => {
            navigate("/question");
            startTimer();
          }}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default HomePage;
