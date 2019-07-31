import React, { useRef, useEffect } from "react";
import NavWrapperItem from "../mainWrapper/navWrapperItem";
import { Link } from "react-router-dom";
import { NavWrapper, MouseSlider } from "..";
import Item from "./item";

const gap = 190;

const scrollToRef = ref => {
  console.log(ref.current.offsetLeft);
  document.getElementById("ref").scrollTo(ref.current.offsetLeft, 0);
};

const NavBar = ({ Ref }) => {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  const pathName = window.location.pathname;

  useEffect(() => {
    if (Ref === true) {
      executeScroll();
      console.log("실행");
    }
  }, [Ref]);

  return (
    <NavWrapper>
      <MouseSlider>
        {Item.map((item, i) => (
          <NavWrapperItem key={`item_${item.url}`} left={`${i * gap}px`}>
            <Link
              to={`/${item.url.replace(" ", "").replace(" ", "")}`}
              style={{
                fontWeight:
                  pathName === `/${item.url.replace(" ", "").replace(" ", "")}`
                    ? "bold"
                    : "",
                color:
                  pathName === `/${item.url.replace(" ", "").replace(" ", "")}`
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
            key={`item_${item.url}_div`}
            ref={
              pathName === `/${item.url.replace(" ", "").replace(" ", "")}`
                ? myRef
                : null
            }
            style={{
              position: "absolute",
              border:
                pathName === `/${Item[i].url.replace(" ", "").replace(" ", "")}`
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
