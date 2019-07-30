import React from "react";
import { MainWrapper, ImgWrapper, NavBar, TextWrapper } from "../../components";
import Images from "../../image";

const Content = {
  title: "IU",
  descriptions: "",
  color: ""
};

const Home = () => (
  <MainWrapper>
    <ImgWrapper img={Images.main.home} />
    <TextWrapper title={Content.title} descriptions={Content.descriptions} />
    <NavBar color={Content.color} />
  </MainWrapper>
);

export default Home;
