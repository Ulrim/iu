import React from "react";
import {
  MainWrapper,
  ImgWrapper,
  TextWrapper,
  NavBar
} from "../../../components";
import Images from "../../../image";

const Content = {
  title: "Modem Times",
  descriptions: <div>빠밤</div>,
  color: ""
};

const ModemTimes = () => (
  <MainWrapper>
    <ImgWrapper img={Images.main.ModemTimes} />
    <TextWrapper title={Content.title} descriptions={Content.descriptions} />
    <NavBar color={Content.color} />
  </MainWrapper>
);

export default ModemTimes;
