import Hls from "hls.js";
import React, { useEffect, useRef } from "react";

const MyPlayer = ({ url }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(videoRef.current);
    } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
      videoRef.current.src = url;
    }
  }, [url]);

  return (
    <video ref={videoRef} width={'100%'} height={'100%'} controls={true} />
  );
};

export default MyPlayer;
