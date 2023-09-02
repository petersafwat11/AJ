import React from "react";
import videojs from "video.js";
import { VideoJS } from "./VideoPlayer";
import classes from "./video.module.css";

const VideoJs = () => {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "https://s1.sportshub808.com:8443/hls/btsport1.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <div className={classes["wrapper"]}>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
};

export default VideoJs;

// const VideoJs = () => {
//   return (
//     <div className={classes["video-wrapper"]}>

//       <jwplayer-video
//         controls
//         aspectRatio="inherit"
//         image="/video-background.svg"
//         className={classes["video-player"]}
//         src="https://cdn.jwplayer.com/players/C8YE48zj-IxzuqJ4M.html"
//       ></jwplayer-video>
//     </div>
//   );
// };

// export default VideoJs;
