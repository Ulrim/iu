import React, { useState, useEffect } from "react";
import {
  MainWrapper,
  ImgWrapper,
  NavBar,
  DescBar,
  VideoPlayer
} from "../../../components";
import Content from "../content";

const { video, image, title, descriptions, url } = Content.Day;

const Day = () => {
  const [isMount, setIsMount] = useState(false);
  const pathName = window.location.pathname;

  useEffect(() => {
    if (pathName === `/${url.replace(" ", "").replace(" ", "")}`) {
      setIsMount(true);
    }

    return () => {
      setIsMount(false);
    };
  }, [pathName]);

  return (
    <MainWrapper>
      <VideoPlayer url={video.url} playing={video.playing} next={video.next} />
      <ImgWrapper img={image} />
      <DescBar title={title} descriptions={descriptions} />
      <NavBar Ref={isMount} />
    </MainWrapper>
  );
};

export default Day;
