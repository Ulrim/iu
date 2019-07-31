import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Redirect } from "react-router-dom";
import "./videoPlayer.scss";

const VideoPlayer = ({ url, playing, next }) => {
  const [ProgressRate, setProgressRate] = useState(0);
  const [end, setEnd] = useState(false);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    let totalTime = duration * 1000;
    let pieceTime = totalTime / 1000;
    let count = 0;
    let timer;

    if (duration !== 0) {
      timer = setInterval(() => {
        count += parseFloat(0.1);
        setProgressRate(count);

        if (count >= 100) {
          clearInterval(timer);
          setEnd(true);
        }
      }, pieceTime);
    }

    return () => {
      clearInterval(timer);
    };
  }, [duration]);

  return (
    <div className="VideoPlayer">
      <div className="VideoPlayer__main">
        <ReactPlayer
          className="VideoPlayer__main__player"
          url={url}
          width="100%"
          height="100%"
          playing={false || playing}
          loop={false}
          onDuration={e => setDuration(e)}
        />
      </div>
      <div
        className="VideoPlayer__playerBar"
        style={{
          width: `${ProgressRate}%`,
          height: "5px"
        }}
      >
        {end && <Redirect to={`/${next}`} />}
      </div>
    </div>
  );
};

export default VideoPlayer;
