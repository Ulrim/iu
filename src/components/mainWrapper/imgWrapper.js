import React from "react";
import "./imgWrapper.scss";

const ImgWrapper = ({ img }) => (
  <>
    <div className="ImgWrapper">
      <img src={img} alt={`image_${img}`} />
    </div>
  </>
);

export default ImgWrapper;
