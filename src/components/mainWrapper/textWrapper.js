import React from "react";
import "./textWrapper.scss";

const TextWrapper = ({ title, descriptions }) => (
  <>
    <div
      className="TextWrapper"
      style={{
        cursor: window.location.pathname === "/" ? "default" : "pointer"
      }}
    >
      <div className="titleContainer">
        <h1>{title}</h1>
      </div>
      <div className="descriptions">{descriptions}</div>
    </div>
  </>
);

export default TextWrapper;
