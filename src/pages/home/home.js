import React from "react";
import { MainWrapper, ImgWrapper, NavBar, TextWrapper } from "../../components";
import Content from "./content";

const Home = () => (
  <MainWrapper>
    <ImgWrapper img={Content.home.image} />
    <TextWrapper title={Content.home.title} />
    <NavBar />
  </MainWrapper>
);

export default Home;
