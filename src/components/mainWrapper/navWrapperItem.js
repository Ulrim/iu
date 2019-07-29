import React from "react";

const NavWrapperItem = ({ children, left, color }) => (
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
