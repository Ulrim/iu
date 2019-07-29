import React from "react";
import "./textWrapper.scss";

const TextWrapper = ({ color, title, descriptions }) => (
  <>
    <div
      className="TextWrapper"
      style={{
        color: color
      }}
    >
      <div className="title">{title}</div>
      <div className="descriptions">{descriptions}</div>
    </div>
  </>
);

export default TextWrapper;
