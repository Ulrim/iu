import React, { useState, useEffect } from "react";
import { MainWrapper, ImgWrapper, NavBar, DescBar } from "../../../components";
import Images from "../../../image";

const Content = {
  title: "Palette",
  descriptions: <div>빠밤</div>
};

const Palette = () => {
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
      <ImgWrapper img={Images.main.Palette} />
      <DescBar title={Content.title} descriptions={Content.descriptions} />
      <NavBar Ref={isMount} />
    </MainWrapper>
  );
};

export default Palette;
