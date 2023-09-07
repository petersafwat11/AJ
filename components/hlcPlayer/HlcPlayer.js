import Hls from "hls.js";
import React, { useEffect, useRef, useState } from "react";
import classes from "./hlcPlayer.module.css";
const MyPlayer = ({ url }) => {
  const videoRef = useRef(null);
  const videoIConRef = useRef(null);
  const [palying, setPlaying] = useState(false);
  // Add a click event listener to the play button
  const playVideo = function () {
    // Toggle the video state
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  // Add a play event listener to the video
  const handlePlaying = function () {
    setPlaying(!palying);
    // videoIConRef.current.classList.add("playing");
  };

  // Add a pause event listener to the video
  const handlePausing = function () {
    setPlaying(!palying);
    // videoIConRef.current.classList.remove("playing");
  };

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
    <div className={classes["video-container"]}>
      <video
        className={classes["video"]}
        ref={videoRef}
        width={"100%"}
        height={"100%"}
        controls={true}
        autoPlay={false}
        onPlay={handlePlaying}
        onPause={handlePausing}
      ></video>
      {!palying && (
        <div
          onClick={() => {
            console.log("clicked");
            playVideo();
          }}
          ref={videoIConRef}
          className={classes["play-icon"]}
          // src="/svg/menu-icon.svg"
          // alt="menu"
          // width="70"
          // height="60"
        ></div>
      )}
    </div>
  );
};

export default MyPlayer;
