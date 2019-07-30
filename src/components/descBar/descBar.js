import React from "react";
import { Link } from "react-router-dom";
import { TextWrapper } from "..";

const DescBar = ({ title, descriptions }) => {
  return (
    <>
      <Link to="/Loading">
        <TextWrapper title={title} descriptions={descriptions} />
      </Link>
    </>
  );
};

export default DescBar;
