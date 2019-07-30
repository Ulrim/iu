import React from "react";
import ReactPlayer from "react-player";
import "./videoPlayer.scss";

const VideoPlayer = ({ url, playing, loop }) => {
  return (
    <div className="VideoPlayer">
      <ReactPlayer
        className="VideoPlayer__player"
        url={url}
        width="100%"
        height="100%"
        playing={false || playing}
        loop={false || loop}
      />
    </div>
  );
};

export default VideoPlayer;
