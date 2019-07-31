import React from "react";

const NavWrapperItem = ({ children, left }) => (
  <>
    <div
      className="NavWrapperItem"
      style={{
        left: left
      }}
    >
      <div>{children}</div>
    </div>
  </>
);

export default NavWrapperItem;
