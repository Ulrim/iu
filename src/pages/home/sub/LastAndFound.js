import React, { useState, useEffect } from "react";
import {
  MainWrapper,
  ImgWrapper,
  NavBar,
  DescBar,
  VideoPlayer
} from "../../../components";
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
  video: {
    url: "https://youtu.be/0ZukHxqOA0o",
    playing: true,
    loop: true
  }
};

const LastAndFound = () => {
  const [isMount, setIsMount] = useState(false);
  const pathName = window.location.pathname;

  useEffect(() => {
    if (pathName === `/${Content.title.replace(" ", "").replace(" ", "")}`) {
      setIsMount(true);
    }

    return () => {
      setIsMount(false);
    };
  }, [pathName]);

  return (
    <MainWrapper>
      <VideoPlayer
        url={Content.video.url}
        playing={Content.video.playing}
        loop={Content.video.loop}
      />
      <ImgWrapper img={Images.main.GrowingUp} />
      <DescBar title={Content.title} descriptions={Content.descriptions} />
      <NavBar Ref={isMount} />
    </MainWrapper>
  );
};

export default LastAndFound;
