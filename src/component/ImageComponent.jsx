import React from "react";
import "./imageComponent.css";

const ImageComponent = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className='image-wrapper'>
          <div className='image1'>
            <img className='image' src={item.image1} alt='hello' />
            <label>
              <input type='radio' />
              Image1
            </label>
          </div>
          <div className='image2'>
            <img className='image' src={item.image2} alt='hello1' />
            <label>
              <input type='radio' />
              Image2
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageComponent;
