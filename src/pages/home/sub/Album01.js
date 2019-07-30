import React from "react";
import { MainWrapper, ImgWrapper, NavBar, DescBar } from "../../../components";
import Images from "../../../image";

const Content = {
  title: "미아",
  descriptions: (
    <div>
      쏟아지는 빗물은
      <br />
      날 한치 앞도 못 보게 해<br />
      몰아치는 바람은
      <br />
      단 한 걸음도 못 가게 해 <br />
      벼랑 끝에 서 있는 듯이
      <br />
      난 무서워 떨고 있지만 <br />
      작은 두 손을 모은 <br />
      내 기도는 하나 뿐이야 돌아와...
      <br />
    </div>
  ),
  color: ""
};

const Album01 = () => (
  <MainWrapper>
    <ImgWrapper img={Images.main.GrowingUp} />
    <DescBar title={Content.title} descriptions={Content.descriptions} />
    <NavBar color={Content.color} />
  </MainWrapper>
);

export default Album01;
