import React from "react";
import ReactHlsPlayer from "react-hls-player";

const VideoPlayer = () => {
  return (
    <ReactHlsPlayer
      src="https://s1.sportshub808.com:8443/hls/btsport1.m3u8"
      autoPlay={false}
      controls={true}
      width="100%"
      height="auto"
    />
  );
};

export default VideoPlayer;
