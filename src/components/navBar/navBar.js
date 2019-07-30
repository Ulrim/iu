import React from "react";
import NavWrapperItem from "../mainWrapper/navWrapperItem";
import { Link } from "react-router-dom";
import { NavWrapper, MouseSlider } from "..";

const Item = [
  { name: "Last And Found" },
  { name: "Last Fantasy" },
  { name: "Modem Times" },
  { name: "Modem Times Epilogue" },
  { name: "Palette" }
];

const gap = 190;

// const scrollToRef = ref =>
//   window.scrollTo({
//     top: ref.current.offsetTop,
//     left: 0,
//     behavior: "smooth"
//   });

const NavBar = ({ color }) => {
  return (
    <NavWrapper>
      <MouseSlider>
        {Item.map((item, i) => (
          <NavWrapperItem key={`item_${item.name}`} left={`${i * gap}px`}>
            <Link
              to={`/${item.name.replace(" ", "").replace(" ", "")}`}
              style={{
                color: color
              }}
            >
              {item.name}
            </Link>
          </NavWrapperItem>
        ))}
      </MouseSlider>
    </NavWrapper>
  );
};

export default NavBar;
