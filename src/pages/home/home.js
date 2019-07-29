import React from "react";
import { MainWrapper, ImgWrapper, TextWrapper, NavBar } from "../../components";
import Images from "../../image";

const textContent = {
  title: "My Home",
  descriptions: (
    <div>
      <p>ㅇㅇ</p>내 집이고 내 집이지!! my Home
    </div>
  )
};

const Home = () => (
  <MainWrapper>
    <ImgWrapper img={Images.main.home} />
    <TextWrapper
      title={textContent.title}
      descriptions={textContent.descriptions}
    />
    <NavBar />
  </MainWrapper>
);

export default Home;
