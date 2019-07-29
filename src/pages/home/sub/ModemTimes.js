import React from "react";
import {
  MainWrapper,
  ImgWrapper,
  TextWrapper,
  NavBar
} from "../../../components";
import Images from "../../../image";

const textContent = {
  title: "Modem Times",
  descriptions: <div>빠밤</div>
};

const ModemTimes = () => (
  <MainWrapper>
    <ImgWrapper img={Images.main.home} />
    <TextWrapper
      title={textContent.title}
      descriptions={textContent.descriptions}
    />
    <NavBar />
  </MainWrapper>
);

export default ModemTimes;
