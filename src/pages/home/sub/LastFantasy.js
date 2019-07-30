import React from "react";
import { MainWrapper, ImgWrapper, NavBar, DescBar } from "../../../components";
import Images from "../../../image";

const Content = {
  title: "Last Fantasy",
  descriptions: <div>빠밤</div>,
  color: ""
};

const LastFantasy = () => (
  <MainWrapper>
    <ImgWrapper img={Images.main.LastFantasy} />
    <DescBar title={Content.title} descriptions={Content.descriptions} />
    <NavBar color={Content.color} />
  </MainWrapper>
);

export default LastFantasy;
