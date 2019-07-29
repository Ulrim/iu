import React from "react";
import "./mainWrapper.scss";

const MainWrapper = ({ children }) => {
  return (
    <>
      <div className="TitleWrapper">{children}</div>
    </>
  );
};

export default MainWrapper;
