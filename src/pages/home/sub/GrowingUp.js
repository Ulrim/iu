import React from "react";
import {
  MainWrapper,
  ImgWrapper,
  TextWrapper,
  NavBar
} from "../../../components";
import Images from "../../../image";

const textContent = {
  title: "Growing Up",
  descriptions: <div>빠밤</div>
};

const GrowingUp = () => (
  <MainWrapper>
    <ImgWrapper img={Images.main.home} />
    <TextWrapper
      title={textContent.title}
      descriptions={textContent.descriptions}
    />
    <NavBar />
  </MainWrapper>
);

export default GrowingUp;
