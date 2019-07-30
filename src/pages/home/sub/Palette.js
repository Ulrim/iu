import React from "react";
import { MainWrapper, ImgWrapper, NavBar, DescBar } from "../../../components";
import Images from "../../../image";

const Content = {
  title: "Palette",
  descriptions: <div>빠밤</div>,
  color: ""
};

const Palette = () => (
  <MainWrapper>
    <ImgWrapper img={Images.main.Palette} />
    <DescBar title={Content.title} descriptions={Content.descriptions} />
    <NavBar color={Content.color} />
  </MainWrapper>
);

export default Palette;
