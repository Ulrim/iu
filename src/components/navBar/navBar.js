import React from "react";
import NavWrapperItem from "../mainWrapper/navWrapperItem";
import { Link } from "react-router-dom";
import { NavWrapper } from "..";

const Item = [
  { name: "Growing Up" },
  { name: "Last Fantasy" },
  { name: "Modem Times" },
  { name: "Modem Times Epilogue" },
  { name: "Palette" }
];

const gap = 250;

const NavBar = () => {
  return (
    <NavWrapper>
      {Item.map((item, i) => (
        <NavWrapperItem key={`item_${item.name}`} left={`${i * gap}px`}>
          <Link to={`/${item.name.replace(" ", "").replace(" ", "")}`}>
            {item.name}
          </Link>
        </NavWrapperItem>
      ))}
    </NavWrapper>
  );
};

export default NavBar;
