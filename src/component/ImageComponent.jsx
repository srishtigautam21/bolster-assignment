import React from "react";
import "./imageComponent.css";
import { useDataContext } from "../context/dataContext";

const ImageComponent = ({
  data,
  // imageSelected,
  // setImageSelected,
  // nextQues,
  // setNextQuestion,
  // setMarks,
  // setIsCorrect,
}) => {
  const { setImgCategory, imgCategory, setImageSelected, nextQues } =
    useDataContext();
  console.log("ques", nextQues);
  const imageHandler = (e, image) => {
    e.stopPropagation();
    let isImage = image.split("-")[1].includes("correct") ? "correct" : "fake";
    console.log(isImage);
    // ansArr?.filter(ans=>ans!==isImage)
    setImageSelected(isImage);

    // if (imageSelected === "correct") {
    //   setMarks((c) => c + 1);
    //   setIsCorrect(true);
    // } else {
    //   setIsCorrect(false);
    // }
  };
  return (
    <div>
      {/* {data[nextQues].map((item) => ( */}
      <div key={data[nextQues].id} className='image-wrapper'>
        <div className='image1'>
          <img className='image' src={data[nextQues].image1} alt='hello' />
          <label>
            <input
              type='radio'
              onChange={(e) => {
                imageHandler(e, data[nextQues].image1);
                setImgCategory("Image1");
              }}
              checked={imgCategory === "Image1"}
            />
            Image1
          </label>
        </div>
        <div className='image2'>
          <img className='image' src={data[nextQues].image2} alt='hello1' />
          <label>
            <input
              type='radio'
              onChange={(e) => {
                imageHandler(e, data[nextQues].image2);
                setImgCategory("Image2");
              }}
              checked={imgCategory === "Image2"}
            />
            Image2
          </label>
        </div>
      </div>
      {/* ))}  */}
    </div>
  );
};

export default ImageComponent;
