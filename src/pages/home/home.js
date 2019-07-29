import React from "react";
import { MainWrapper, ImgWrapper, TextWrapper, NavBar } from "../../components";
import Images from "../../image";

const Content = {
  title: "My Home",
  descriptions: <div>내 집이고 내 집이지!! my Home</div>,
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
