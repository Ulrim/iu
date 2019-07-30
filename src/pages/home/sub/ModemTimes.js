import React from "react";
import { MainWrapper, ImgWrapper, NavBar, DescBar } from "../../../components";
import Images from "../../../image";

const Content = {
  title: "Modem Times",
  descriptions: <div>빠밤</div>,
  color: ""
};

const ModemTimes = () => (
  <MainWrapper>
    <ImgWrapper img={Images.main.ModemTimes} />
    <DescBar title={Content.title} descriptions={Content.descriptions} />
    <NavBar color={Content.color} />
  </MainWrapper>
);

export default ModemTimes;
