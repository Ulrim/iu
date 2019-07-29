import React from "react";
import "./textWrapper.scss";

const TextWrapper = ({ title, descriptions }) => (
  <>
    <div className="TextWrapper">
      <div className="title">{title}</div>
      <div className="descriptions">{descriptions}</div>
    </div>
  </>
);

export default TextWrapper;
