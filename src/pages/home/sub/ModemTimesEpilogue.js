import React from "react";
import { MainWrapper, ImgWrapper, NavBar, DescBar } from "../../../components";
import Images from "../../../image";

const Content = {
  title: "Modem Times - Epilogue",
  descriptions: <div>빠밤</div>,
  color: ""
};

const ModemTimesEpilogue = () => (
  <MainWrapper>
    <ImgWrapper img={Images.main.ModemTimesEpilogue} />
    <DescBar title={Content.title} descriptions={Content.descriptions} />
    <NavBar color={Content.color} />
  </MainWrapper>
);

export default ModemTimesEpilogue;
