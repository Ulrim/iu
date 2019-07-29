import React from "react";
import {
  MainWrapper,
  ImgWrapper,
  TextWrapper,
  NavBar
} from "../../../components";
import Images from "../../../image";

const Content = {
  title: "Growing Up",
  descriptions: <div>빠밤</div>,
  color: ""
};

const GrowingUp = () => (
  <MainWrapper>
    <ImgWrapper img={Images.main.GrowingUp} />
    <TextWrapper title={Content.title} descriptions={Content.descriptions} />
    <NavBar color={Content.color} />
  </MainWrapper>
);

export default GrowingUp;
