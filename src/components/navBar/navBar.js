import React, { useRef, useEffect } from "react";
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

const scrollToRef = ref => {
  console.log(ref.current.offsetLeft);
  document.getElementById("ref").scrollTo(ref.current.offsetLeft, 0);
};

const NavBar = ({ color, Ref }) => {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  const pathName = window.location.pathname;

  useEffect(() => {
    if (Ref === true) {
      executeScroll();
    }
  }, [Ref]);

  return (
    <NavWrapper>
      <MouseSlider>
        {Item.map((item, i) => (
          <NavWrapperItem key={`item_${item.name}`} left={`${i * gap}px`}>
            <Link
              to={`/${item.name.replace(" ", "").replace(" ", "")}`}
              style={{
                fontWeight:
                  pathName === `/${item.name.replace(" ", "").replace(" ", "")}`
                    ? "bold"
                    : "",
                color:
                  pathName === `/${item.name.replace(" ", "").replace(" ", "")}`
                    ? "#EECDA3"
                    : ""
              }}
            >
              {item.name}
            </Link>
          </NavWrapperItem>
        ))}
        {Item.map((item, i) => (
          <div
            key={`item_${item.name}_div`}
            ref={
              pathName === `/${item.name.replace(" ", "").replace(" ", "")}`
                ? myRef
                : null
            }
            style={{
              position: "absolute",
              border:
                pathName ===
                `/${Item[i].name.replace(" ", "").replace(" ", "")}`
                  ? "2px solid red"
                  : "2px solid blue",
              left: `${i * gap}px`
            }}
          />
        ))}
      </MouseSlider>
    </NavWrapper>
  );
};

export default NavBar;
